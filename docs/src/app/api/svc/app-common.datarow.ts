import { ComponentFactoryResolver } from '@angular/core';
import { ColumnInfo } from '../mod/app-column.model';
import { AppCommonMethods } from "./app-common.methods";

export class TableRowBase{

    public _parentTable:any=null;
    public _requestDate:Date = null;

    private _isDeleting:boolean=false;
    private _isEditing:boolean=false;
    private _isDirty:boolean=false;
    private _isPristine:boolean=false;
    private _isPending:boolean=true;

    private _backupData:any=null;

    public _newId:number=undefined;

    constructor(){

    }

    public get parentTable(){
        return this._parentTable;
    }

    // to update on posting
    set isEditing(value:boolean){
        this._isEditing = value;
    }
    get isEditing():boolean{
        return this._isEditing;
    }

    // to add on posting
    set isPending(value:boolean){
        this._isPending = value;
    }
    get isPending():boolean{
        return this._isPending;
    }    

    // to delete on posting
    set isDeleting(value:boolean){
        this._isDeleting = value;
    }
    get isDeleting():boolean{
        return this._isDeleting;
    }

    get isNew():boolean{
        return this._newId != null;
    }



    set isPristine(value:boolean){
        this._isPristine = value;
        this._isDirty = !this._isPristine;
    }

    protected _Table():any{
        return this._parentTable;
    }

    get TableObj():any{
        return this._parentTable;
        //return null;
    }

    get keyVal():any{
        return this.TableObj.keyCol ? this[this.TableObj.keyName] : null;
    }

    get toSubmit():boolean{
        if(this.isNew) return true;
        if(this.isDeleting) return true;
        return this.isDirty;
    }

    get isDirty():boolean{
        //if(this.noCurrent) return false; // !just remarked 2019/12/29 because of possible irrelevance

        // always return dirty for new records created
        // if(this._newId!=undefined) return true;

        let withChanges:boolean = false;
        if(this._backupData != null){
            let cols:Array<ColumnInfo> = this._parentTable.columns;
            cols.forEach((c:ColumnInfo)=>{
              if(c.IsForRestore && !withChanges){
                  if(this[c.name] != this._backupData[c.name]) withChanges = true;
              }
            })

            if(!withChanges && this._parentTable.childrenTable!=null){
                // check if any of the children was changed
                for(var tblKey in this._parentTable.childrenTable){
                    // get child table object from the collection of tables
                    // stored in childrenTable property
                    let tblChild:any = this._parentTable.childrenTable[tblKey];
                    // get current row key field value which will be used to
                    // to filter for dirty rows under the current row
                    let rowKey:number = this[this._parentTable.keyFields[0].name];
                    // if child table groupFields definition is defined...
                    if(tblChild.keyGroupFields!=null){
                        // child table with group key field(s) exist.
                        // get dirty rows bey group id
                        let childDirtyRows:Array<any> = tblChild.__dirtyRows(rowKey)
                        withChanges = (childDirtyRows.length!=0);
                    }
                    if(withChanges) break;
                }
            }
        }

        return withChanges;
    }

    get isCurrent():boolean{
        if(this.noCurrent) return false;
        
        let row:any = this._parentTable.currentRow;
        let keyField:string = this._parentTable.keyName;

        return this[keyField] == row[keyField];
    }

    get noParent():boolean{
        return this._parentTable == null;
    }

    get noBackup():boolean{
        return this._backupData == null;
    }

    get backupData():any{
        return this._backupData;
    }

    get noCurrent():boolean{
        if(this.noParent) return false;
        return this._parentTable.noCurrent;
    }

    get toPostData():any{
        let ret:any = null
        let tbl:any = this._parentTable;
        let keyName = tbl.keyName
        let keyVal:Number = this[keyName]; 

        if(this.isDeleting){
            ret = {};
            ret[keyName] = keyVal;
            ret["_acn"]="del";
            ret["_rdt"]=null;

        }else if(this.isNew) {
            ret = {};
            this[keyName] = -this._newId;
            ret[keyName] = this[keyName];
            ret["_acn"]="new";
            ret["_rdt"]=null;
            // capture only the data that were changed
            this._parentTable.forRestoreColumns.forEach((c:ColumnInfo)=>{
                if(this[c.name] != undefined){
                    ret[c.name] = this[c.name];
                }
            });

        } else if(this.isDirty){
            ret = {};

            // include key field(s)
            //this._parentTable.keyFields.forEach((c:ColumnInfo)=>{
            //    ret[c.name] = this[c.name];
            //});

            //include key field

            if(!this.noBackup){
                // updated record
                ret["_acn"]="upd";
            }else{
                ret["_acn"]=""
            }

            // include last request date
            ret["_rdt"] = this._requestDate;

            ret[keyName] = keyVal;

            // capture only the data that were changed
            this._parentTable.forRestoreColumns.forEach((c:ColumnInfo)=>{
                if(this[c.name] != this._backupData[c.name]){
                    ret[c.name] = this[c.name];
                }
            });

        }   // if record is dirty [end]
        else if(this.isDeleting){

        }

        return ret;
    }

    SetAsCurrent():void{
        // asisgn the current record as the currentRow of the parent table
        if(!this._parentTable) return;
        this._parentTable.__currentRow(this);
    }

    Post():void{
        // sve individual record
        if(!this._parentTable) return;
        this._parentTable.Post(this);
    }

    CaptureDataForPosting(){
        if(this._parentTable==null){
            console.log("No table attached to the data row");
        }else{
            this._parentTable.columns.forEach((c:ColumnInfo) => {
                if(c.keyPosition==-1 && !c.IsStampField)
                    console.log(c.name + ": ",this[c.name]);
            });
        }
    }

    UnSetRestoreValues(){
        // check if restored values are still necessary to be on the current row.
        // if no changes were made on the current record, this._backupData must be set to null
        if(this.noBackup) return;
        if(this.noParent) {
            this._backupData = null;
            return;
        }

        // if no changes were made, set restore data (this._backupData) to null
        if(!this.isDirty) this._backupData = null;
    }

    get childChanged():boolean{
        if(this._parentTable.childrenTable==null) return false;
        return false;
    }

    private ChildTable(childTableCode:string):any{
        let child:any=null;
        //this._parentTable.Links(),this._parentTable.tables


        if(this._parentTable.childrenTable)child = this._parentTable.ChildTable(childTableCode);
        return child;
    }

    public get Tables():any{
        if(!this._parentTable) return {};
        return this._parentTable.tables
    }
    public get Links():Array<any>{
        if(!this._parentTable) return [];
        return this._parentTable.Links()
    }

    private _ChildRow:any={};
    public ChildRow(childTableCode:string,localField?:string, groupId?:number, reset?:boolean):any{
        /**
         * Get one to one record from the child table
         * !If groupId==-1 get 1 to 1 record match from the linked child table
         */

        if(localField==undefined)localField = "";
        if(groupId==undefined)groupId = -1;
        
        if(reset == undefined)reset = false;

        let childRowKey:string = childTableCode + (localField.length!=0 ? "_" + localField : "");

        let ret:any = {};
        let row:any = this._ChildRow[childRowKey];  // #row_exist#
        if(!row || reset || this.isCurrent){
            let childTable:any = this._parentTable.tables[childTableCode];

            // localField was not supplied therefore lookup it up from the 
            // table's links definitions
            if(localField.length==0) {
                let firstLink:any = this._parentTable.FirstLink;
                if(firstLink)localField=firstLink.local_field;
            }
            if(localField.length!=0){
                ret = childTable.Item(this[localField], groupId);
            }else{
                ret =null;
            }
            
            this._ChildRow[childRowKey] = ret; //!!! for caching !!!

            if(!ret){
                if(groupId!=-1){
                    // group id is supplied, retreive all records belonging to the group
                    // in this case, all records will be retrieved but will
                    // initially return a null value. once the group of
                    // records are retreived where the desired row belongs to,
                    // the correct row will be retured by the line #row_exist#
                    childTable.GetRowsByGroup({key:groupId});
                }else{
                    // group is is not suppiied, get individual record...
                    ret =childTable.GetRowById(this[localField]);
                }
            }
        }else{
            ret = row;
        }


        return ret;
    }

    public ChildRow_Obsolete(childTableCode:string,localField?:string, groupId?:number, reset?:boolean):any{
        /**
         * Get one to one record from the child table
         */

        if(localField==undefined)localField = "";
        if(groupId==undefined)groupId = -1;
        
        if(reset == undefined)reset = false;

        let childRowKey:string = childTableCode + (localField.length!=0 ? "_" + localField : "");

        let ret:any = {};
        let row:any = this._ChildRow[childRowKey];
        if(!row || reset){
            let childTable:any = this._parentTable.tables[childTableCode];

            // localField was not supplied therefore lookup it up from the 
            // table's links definitions
            if(localField.length==0) {
                let firstLink:any = this._parentTable.FirstLink;
                if(firstLink)localField=firstLink.local_field;
            }
            if(localField.length!=0){
                ret = childTable.Item(this[localField], groupId);
            }else{
                ret =null;
            }
            this._ChildRow[childRowKey] = ret;

            if(!ret && groupId!=-1)childTable.GetRowsByGroup({key:groupId});
        }else{
            ret = row;
        }


        return ret;
    }

    public ChildRows(childTableCode?:string,resolve?:Function,reject?:Function):Array<any>{

        let ret:Array<any>=[];
        let link:any = this.Links.find(l=>(l.child_code==childTableCode))

        if(!link)return [];

        let child:any=this.Tables[childTableCode]; //this.Tables.find(t => t.tableCode==childTableCode);

        // GetRowsByGroup is used to get rows based on the 
        // parent key - to - child group definition
        if(child) ret = child.GetRowsByGroup({key:this,onSuccess:resolve,onError:reject});
 
        return ret;
    }    

    SetRestoreValues(){
        // if table row is not yet attached to its parent table
        if(this.noParent) return;
        if(!this.noBackup) return;  // do not overwrite previously saved retore value

        // set _backupData to an empty object;
        this._backupData = {};
        if(this._parentTable.childrenTable!=null){
            this._backupData["_childChanged"] = (e)=>{
                return e;
            };
        }
        this._parentTable.columns.forEach((c:ColumnInfo) => {
            // backup non-stamp fields defined in the columns property
            if(c.IsForRestore) this._backupData[c.name] = this[c.name];
        });

    }

    Restore(){
        if(!this.isDirty) return;
        if(this._parentTable.childrenTable!=null){
            // restore changed rows
        }
        this._parentTable.forRestoreColumns.forEach((c:ColumnInfo)=>{
            this[c.name] = this._backupData[c.name];
        });
    }



    Delete():void{
        
        let tbl:any = this._parentTable;
        if(!tbl) return;

        let keyField: string = tbl.keyName;
        let newRec:boolean=true;
        let keyVal:any=this[keyField];
        
        tbl.Purge(keyVal);

        return;

        if(keyVal) if(Number(keyVal)>0) newRec=false;
        if(newRec){
            // immediately remove the record from the table's records collection
            tbl.Purge(Number(keyVal));
        }else{
            this.isDeleting = true;
            // after setting isDeleting for the current record,
            // also set isDeleting flag for the children records if already loaded 
            // in the client dataset to have aid display routine display/action selection

            // on post, delete this record and all children associated....

        }

        //
    }


    SetNewId(){
        if(this._parentTable == null || this._newId != undefined) return;
     }


}