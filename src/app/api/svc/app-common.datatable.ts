/**************************************************************************************************
 * Note(s):
 *   1. 2019/10/03 - Pending enhancement on unsubscribing when unsuccessful request did not
 *                   return. Solution is to create a garbage collection routine that will
 *                   unsubscribe all subscriptions that are still in the collection even
 *                   after a long period from the time they were requested (say... 5mins)
 **************************************************************************************************/

import { KeyValuePair } from "../mod/app-common.model";
import { AppReturn } from "../mod/app-return.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ColumnInfo } from "../mod/app-column.model";
import { Subscription } from "rxjs";
import { AppCommonMethods } from "./app-common.methods";
import { group } from "@angular/animations";
import { StringifyOptions } from "querystring";
import { RecurseVisitor } from '@angular/compiler/src/i18n/i18n_ast';

export class TableBase extends AppCommonMethods {
  constructor(
    public http: HttpClient,
    public apiUrl: string,
    public tables?: Array<any>
  ) {
    super();
    this.UnSubscribe(null, true);
  }

  public apiHttp: HttpClient;
  public tableCode: string;
  public columns: Array<ColumnInfo> = [];
  public keyFields: Array<ColumnInfo> = [];
  public keyUniqueFields: Array<ColumnInfo> = [];
  public keyGroupFields: Array<ColumnInfo> = [];
  public keySortFields: Array<ColumnInfo> = [];
  public keyDisplayFields: Array<ColumnInfo> = [];

  // initial value is undefined to allow null value when
  // non of the tables links to thi particular table
  public _parentTable: any = undefined;

  private __Item: any = {};
  public Item(key: number, groupId?: number): any {
    let ret: any = this.__Item["r_" + String(key)];
    if (!ret && groupId != undefined) {
      //this.GetRowById(key);
      this.GetRowsByGroup({key:groupId});
    }
    return ret;
  }

  public Purge(key:number,removeFromState?:boolean){
    /**
     * Executes deletion of record from the client row state collection
     */

    if(removeFromState==undefined) removeFromState=false;

    let keyField:string = this.keyName;
    let itemKey:string = "r_" + String(key)
    let item:any = this.__Item[itemKey];

    if(item){
      item.isDeleting = true;
      if(removeFromState || item.isNew){
        // purge from the client's memory
        delete this.__Item[itemKey];  // remove from index object

        // remove from rows array

        // find index of object
        // .findIndex(obj => obj.id == 3
        let dataRows:Array<any> = this.GetRows();
        let itemIndex:number = dataRows.findIndex(elem => elem[keyField] == key);

        let numStr:string='';
        dataRows.forEach(e =>{numStr+= (numStr ? "," : "")+e[keyField];});

        console.log("Rows:",dataRows,"Index:",itemIndex,"Key:",key,"keys:",numStr);

        // remove element from array
        if(itemIndex!=-1)dataRows.splice(itemIndex,1);

        numStr='';
        dataRows.forEach(e =>{numStr+= (numStr ? "," : "")+e[keyField];});

        console.log("Rows after purge:",dataRows,"Index:",itemIndex,"Key:",key,"keys:",numStr);

      }
  
    }

    return;

    //this.rows.find(myObj => myObj.id < 0)


    if(item)delete this.__Item[itemKey];
  }

  public pendingRequest: boolean = false;

  private _derivedRecords: Array<any> = [];
  private _derivedTable: any;

  private _currentRow: any = null;

  public set derivedTable(table: any) {
    this._derivedTable = table;
    this._derivedRecords = this._derivedTable.rows;
  }

  protected TableLinks(): Array<string> {
    return null;
  }
  protected Links(): Array<any> {
    return null;
  }

  get parentTable(): any {
    if (this._parentTable == undefined) {
      // get parent table
    }
    return this._parentTable;
  }

  get keyCol(): ColumnInfo {
    return this.keyFields[0];
  }

  get keyName():string{
    return this.keyCol.name;
  }

  get lkpValue(): ColumnInfo {
    return this.keyCol;
  }
  get lkpDisplay(): ColumnInfo {
    if (this.keyDisplayFields.length != 0) {
      // return the last element of the display fields array
      return this.keyDisplayFields[this.keyDisplayFields.length - 1];
    } else {
      return null;
    }
  }
  get lkpDisplay1(): ColumnInfo {
    if (this.keyDisplayFields.length != 0) {
      // return the last element of the display fields array
      return this.keyDisplayFields[0];
    } else {
      return null;
    }
  }

  get grpCol(): ColumnInfo {
    return this.keyGroupFields[0];
  }

  get tblUrl(): string {
    return this.apiUrl + "/" + this.tableCode;
  }

  get keyIndices(): string {
    return this.GetColumnIndices(this.keyFields);
  }
  get groupIndices(): string {
    return this.GetColumnIndices(this.keyGroupFields);
  }

  get noCurrent(): boolean {
    return this.__currentRow() == null;
  }

  private _subsCounter: number = 0;
  private get newSubsKey(): string {
    this._subsCounter++;
    return "sKey_" + this._subsCounter;
  }
  protected __dirtyRows(parentId?: number): Array<any> {
    if (parentId == undefined) {
      return this.GetRows().filter(e => e.isDirty);
    } else {
      let groupFieldObj: ColumnInfo = this.keyGroupFields[0];
      if (groupFieldObj == null) return [];
      let groupField: string = this.keyGroupFields[0].name;
      return this.GetRows().filter(e => e.isDirty && e[groupField] == parentId);
    }
  }

  public __dirtyChildren(): Array<any> {
    let ret: Array<any> = [];
    for (var key in this.childrenTable) {
      ret.push(this.childrenTable[key]);
    }
    return ret;
  }

  protected __newRows(): Array<any> {
    return this.GetRows().filter(e => e._newId != undefined);
  }

  get forRestoreColumns(): Array<ColumnInfo> {
    return this.columns.filter((c: ColumnInfo) => c.IsForRestore);
  }

  get toPostData(): any {
    let ret: Array<any> = [];

    // collect all updated/new records
    //let toPost: Array<any> = this.__dirtyRows();
    let toPost: Array<any> = this.GetRows().filter(e => e.toSubmit);
    toPost.forEach(e => {ret.push(e.toPostData);});


    /*
    let links:Array<string> = this.TableLinks();

    if(links!=null){
      console.log("links",links);
      links.forEach(e => {
        let linkArr:Array<string> = e.split("|");
        let tbl:any = this.table
      })
    }*/
    return ret;
  }

  set currentKey(value:number){
    // sets the current record given the id
    let rec:any = this.Item(value);
    if(rec){
      rec.SetAsCurrent();

    }else{
      this._cl("record not found!")
      this.__currentRow(null);  // set current row to null
    }
  }
  get currentKey():number{

    if(!this.__currentRow()) return undefined;  // if not current row is set
    
    return this.__currentRow()[this.keyName];
  }

  protected __currentRow(value?: any): any {
    // returns the current row set in the table
    // this is the same method called from in the specific derived table object's get/set properties

    let isNull:boolean = this.isNullVal(value);

    if(isNull){

      if (this._currentRow != null) this._currentRow.UnSetRestoreValues();
      console.log("Set current row to null!...")
      this._currentRow = null;

    }else if (value != undefined) {

      // remove restore value of the previous current row
      if (this._currentRow != null) this._currentRow.UnSetRestoreValues();


      // set current row of the table equal to the argument row object
      this._currentRow = value;

      // set restore value of the new current row
      this._currentRow.SetRestoreValues();

    }

    // return current row
    return this._currentRow;
  }

  public ChildRowWithKey(
    childTableCode: string,
    row: any,
    groupId?: number
  ): KeyValuePair {
    let ret: KeyValuePair;

    let child: any = this.ChildTable(childTableCode);

    if (child) {
      // iterate through the links definition and look for one which corresponds to
      // this child table. this is to identify the parent field to use when linking
      // a parent field to the child key field
      //

      this.Links().forEach(lnk => {
        if (lnk.child_code == childTableCode) {
          if (lnk.link_type == "1to1" || lnk.link_type == "lookup") {
            ret.value = child.Item(row[lnk.local_field], groupId);
            ret.key = lnk.child_code + "_" + lnk.local_field;
          }
        }
      });
    }

    if (!ret.value && groupId != undefined) this.GetRowsByGroup({key:groupId});

    return ret;
  }

  get FirstLink(): any {
    if (this.Links() == null) return null;
    return this.Links()[0];
  }
  /*
  public ChildRow(childTableCode:string, row:any, localField?:string, groupId?:number):any{

    let ret:any = {};
    let child:any = this.ChildTable(childTableCode);

    if(child){
      // iterate through the links definition and look for one which corresponds to
      // this child table. this is to identify the parent field to use when linking 
      // a parent field to the child key field
      //

      this.Links().forEach(lnk=>{
        if(lnk.child_code == childTableCode){
          
          if(lnk.link_type == "1to1" || lnk.link_type == "lookup"){
            
            ret = child.Item(row[lnk.local_field], groupId);
            if(lnk.link_type=="lookup"){
              console.log("LOCAL FIELD:" ,lnk.local_field,
                "row[lnk.local_field]:",row[lnk.local_field], 
                " RET: ",ret);
            }

          }
        }
      });

    }

    if(!ret && groupId!=undefined)this.GetRowsByGroup(groupId);
    return ret;
  }
*/
  public ChildTable(childTableCode?: string): any {
    let childCode: string = "";
    if (childTableCode == undefined) {
      // if undefined, search only the children table collection because
      // this only means that the request was intended to retreive
      // record(s) directly under the current table
      for (var key in this.childrenTable) {
        childCode = key;
        break;
      }
    } else {
      childCode = childTableCode;
    }
    return this.tables[childCode];
  }

  GetColumnIndices(cols: Array<ColumnInfo>): string {
    let ret: string = "";
    cols.forEach((c: ColumnInfo) => {
      ret +=
        (ret.length != 0 ? "`" : "") +
        this.columns.findIndex(e => {
          return e.name == c.name;
        });
    });
    return ret;
  }

  public childrenTable: any = null;
  public AddChildTable(childTable: any) {
    if (!this.childrenTable) this.childrenTable = {};
    let tableCode: string = childTable.tableCode;
    this.childrenTable[tableCode] = childTable;
  }

  //get http():HttpClient{
  //  return this.apiHttp;
  //}

  Add(rec?: any): any {
    if (rec == undefined) {
      // Create an empty row with temporary id
      rec = this.NewRow();
      rec._newId = Date.now(); // assign temporary
    } else {
      rec.isPending = false;
    }

    // check if key field values are still undefined, if so, assign a new id else remove newId
    let isNew: boolean = false;
    this.keyFields.forEach((col: ColumnInfo) => {
      if (rec[col.name] == undefined) isNew = true;
    });

    let keyField: string = this.keyName;

    if (isNew) {
      rec._newId = this.TempId;
      rec[keyField]= -rec._newId

    } else {
      rec._newId = undefined;
    }

    // assign parent/current table of the new record
    rec.currentTable = this._derivedTable;
    rec._parentTable = this._derivedTable;

    // get unique key field name
    
    // get unique key value
    let key: number = rec[keyField];
    let existing: any = this.Item(rec[keyField]);
    

    if (!existing) {
      
      this._derivedRecords.push(rec);
      this.__Item["r_" + String(key)] = rec;
    } else {
      // (pending) update existing record if not modified or obsolete

      console.log("Did not add the record")
    }

    return rec;
  }

  private _pendingRequests: Array<string> = [];
  private _historicalRequests: Array<string> = [];

  public get History(): Array<string> {
    return this._historicalRequests;
  }
  public get Pending(): Array<string> {
    return this._pendingRequests;
  }

  IsWithHistory(url: string): boolean {
    let idx: number = this._historicalRequests.indexOf(url);
    return idx != -1;
  }

  AddHistoryLog(url: string) {
    let idx: number = this._historicalRequests.indexOf(url);
    if (idx == -1) this._historicalRequests.push(url);
  }

  ClearHistoryLog(url: string) {
    let idx: number = this._historicalRequests.indexOf(url);
    if (idx != -1) this._historicalRequests.splice(idx, 1);
  }

  IsWithPending(url: string): boolean {
    let idx: number = this._pendingRequests.indexOf(url);
    return idx != -1;
  }

  ClearRequestFlag(url: string) {
    let idx: number = this._pendingRequests.indexOf(url);
    if (idx != -1) this._pendingRequests.splice(idx, 1);
  }

  AddRequestFlag(url: string) {
    let idx: number = this._pendingRequests.indexOf(url);
    if (idx == -1) this._pendingRequests.push(url);
  }

  Save():void{
    
  }

  Get(args?: {
    onSuccess?: Function;
    onError?: Function;
    key?: any;
    keyFields?: any;
    subsKey?: string;
  }): Subscription {
    // returns an array of datga
    //return this.http.get(this.tblUrl);
    //return []
    const hdrs = new HttpHeaders();
    hdrs.set("Content-Type", "application/json; charset=utf-8");
    hdrs.set("Access-Control-Allow-Origin", "*");
    hdrs.set(
      "Access-Control-Allow-Origin",
      "Origin, X-Requested-With, Content-Type, Accept"
    );

    let prmKey: string = "";
    let prmKeyFields: string = "";


    if (args) {
      // key must have a final value of v0`v1`...`vN
      // values are separated by back-ticks

      if (args.key != undefined) {
        if (typeof args.key == "object") {
          // contatenate all key values delimited by a back-tick
          args.key.forEach(k => {
            prmKey += (prmKey.length != 0 ? "`" : "") + k;
          });
        } else {
          // assign key to prmKey
          prmKey = String(args.key);
        }
      }
      if (args.keyFields != undefined) {
        if (typeof args.keyFields == "object") {
          // keyfield is an array of field names or indices of fielda
          args.keyFields.forEach(kf => {
            let tempKeyIndex: string;
            if (isNaN(kf)) {
              tempKeyIndex = String(
                this.columns.findIndex(c => {
                  return c.name == kf;
                })
              );
            } else {
              tempKeyIndex = String(kf);
            }
            prmKeyFields +=
              (prmKeyFields.length == 0 ? "" : "`") + tempKeyIndex;
          });
        } else {
          //uprm_user_id, is numeric this is the index of the column,
          // otherwise this is the name of the column
          if (isNaN(args.keyFields)) {
            // not a number, resolve column index
            //this.co.findIndex((e)=>{return e.name=="field3"});
            prmKeyFields = String(
              this.columns.findIndex(c => {
                return c.name == args.keyFields;
              })
            );
          } else {
            // numeric value, assign raw value to prmKeyFields
            prmKeyFields = String(args.keyFields);
          }
        }
      }
    }


    let url: string =
      this.tblUrl +
      (prmKey.length != 0
        ? "/" + prmKey + (prmKeyFields.length != 0 ? "/" + prmKeyFields : "")
        : "");


    // these two tests is important to preceed any alteration to the
    // url (eg. adding auto-generated parameters for each request)
    if (this.IsWithHistory(url)) return null;
    if (this.IsWithPending(url)) return null;

    this.AddRequestFlag(url);
    console.log("request url:",url);

    // url alteration begins here
    let urlParams: string = "";
    if (args.subsKey != undefined)
      urlParams = (url.indexOf("?") == -1 ? "?" : "&") + "skey=" + args.subsKey;

    this.pendingRequest = true;


    let ret: Subscription = this.http.get<AppReturn>(url + urlParams).subscribe(
      (data: any) => {
        // recs will have the array of returned records if the
        // server-side return value is a single table object
        let retObj: any = null;
        let recs: Array<any> = data.recordsList;
        if (data.recordsList) {
          retObj = data;
        } else {
          // recs is null if data is an array of AppReturn
          // need to find data specific to the current table
          // using the tableCode property

          // iterate through the results array element where the returnType == 'table'
          // then call tableObj.ProcessRequestedRecords for each return object
          // this is to allow processing multi-recordset in a single request

          // filter only objects with returnType = 'table'
          let retTables: Array<any> = data.filter(o => o.returnType == "table");

          // loop through objects and call the local ProcessRequestedRecords method
          retTables.forEach(t => {
            let tbl: any = this.tables[t.returnCode];

            if (tbl) tbl.ProcessRequestedRecords(t);
            else console.log("Table object '" + t.returnCode + "' not found!");
          });
        }

        // call onSuccess parameter function if defined
        if (args) if (args.onSuccess != undefined) args.onSuccess(data);
        this.pendingRequest = false;

        // add request to history log. this log will be checked for subsequent requests
        // where calls for existing entries will be bypassed to improve performance efficiency
        this.AddHistoryLog(url);

        // this removes entry to collection if URL that is used to prevent same-request concurrency issues
        // request concurrency check is necessary to prevent duplicate records post-processing
        // action when similar multiple requests return back to the client.
        this.ClearRequestFlag(url);
      }, // end of success
      (error: any) => {
        // call onError parameter function if defined
        if (args) if (args.onError != undefined) args.onError(error);
        this.pendingRequest = false;
        this.ClearRequestFlag(url);
      }
    );

    if (args.subsKey != undefined && args.subsKey != null) {
      this._TblSubs[args.subsKey] = { subs: ret, when: Date.now };
    }
    return ret;
  }

  public ProcessRequestedRecords(retObj: any): void {
    if (!retObj) return;
    let recs: any = retObj.recordsList;
    if (recs) {

      let dataColumns: Array<ColumnInfo> = this.DataColumns(retObj.fieldNames);

      recs.forEach(e => {
        // create new table row
        let row: any = this.NewRow();

        // assign request data/time stamp
        row._requestDate = new Date(retObj.requestDateTime);

        // assign column values
        let idx: number;
        for (idx = 0; idx < dataColumns.length; idx++) {
          let col: ColumnInfo = dataColumns[idx];
          row[col.name] = e[idx];
        }

        // push row to table rows collection
        this.Add(row);
      });
    }
  }

  private _GetRowsByGroup: any = {}; // groups that were already requested previously

  /**
   * 
   *       this.subs = this.ds.tblUserParams.Get({
        onSuccess:(data)=>{
          params  = this.ds.tblUserParams.rows.filter(e => {return e.uprm_user_id==r.user_id});
          this.subs.unsubscribe();
        },
        key:r.user_id,
        keyFields:this.ds.tblUserParams.groupIndices
      });

   * 
   * 
   */
  private _GetRowsByGroupSubs: Subscription = null;
  private _GroupRows: any = {};

  private _TblSubs: any = {};

  GetRowsByGroup(args:{key?: any,keyField?: string,
    onSuccess?: Function,onError?: Function,row?: any}): Array<any> {

    let parKey: string;
    let tbl:any;

    let {key, keyField, onSuccess, onError, row} = args;

    if (typeof key == "object") {
      // key supplied is a row object which is expected to contain
      // the key value to be passed as group key of records in the child table
      tbl=key.Table;
      if (tbl) {

        parKey = tbl.keyName;
        key = key[parKey];
        console.log("parKey:",parKey,"key:",key,this.tableCode);

        /*if (tbl.currentRow) {
          parKey = tbl.keyName;
          key = tbl.currentRow[parKey];
        } else {
          key = undefined;
          this.cl([this.tableCode + ": no current row",this.tableCode=="upln"])
        }*/

      } else {
        key = undefined;
      }
    }

    // define data group key that will be used for
    // identification in the memory cache
    let groupKey: string = "";

    if (key != undefined) {
      // check if group rows already defined in the table object and return it if it does
      groupKey = "g" + key;
      if (this._GroupRows[groupKey]) return this._GroupRows[groupKey]; // this affects retreival of data
    }

    if (this.keyGroupFields.length == 0) return [];

    if (this._GroupRows[groupKey]) {
      // if group of records is/are already existing in the
      // cache, retrieve these records instead of resolfing them
      return this._GroupRows[groupKey]; // this affects retreival of data
    }

    // nov 19, 2019
    //let keyField:string = this.grpCol.name;
    if (keyField == undefined) keyField = this.grpCol.name;

    let subsKey: string = this.newSubsKey;


    // call Get method which executes requests from the server when
    // request has not been done before and no pending request already
    // made and simply waiting for the response
    this.Get({
      onSuccess: e => {
        this.UnSubscribe(e);
        if(onSuccess!=undefined)onSuccess(e);
      },
      onError: e => {
        if (onError) onError(e);
      },
      subsKey: subsKey,
      key: key,
      keyFields: keyField
    });
    let ret = this.GetRows().filter(e => e[keyField] == key);

    if (ret != null) {
      if (ret.length != 0)
        if (!(groupKey in this._GroupRows)) this._GroupRows[groupKey] = ret;
    }
    return ret;
  }

  private _UnSubscribeCounter: number = 0;
  UnSubscribe(e: any, abandoned?: boolean) {
    if (abandoned == undefined) abandoned = false;
    if (abandoned) {
      // clean all abandoned subscriptions which did not return to the client
      // after a duration set in seconds(e.g. dur=60*5 - i,e, 5mins);
      this._UnSubscribeCounter++;
      for (var key in this._TblSubs) {
        let subs: any = this._TblSubs[key];
        this._cl("Unsubscribe abandoned!",abandoned,Date.now(),this._UnSubscribeCounter);
        if (subs) {
          // if subscription is not null
          let when: number = subs.when;
          if (this.MSSince(when) >= 5 * 60 * 1000) {
            // unsubscribe substriptions without response for at least 5 mins
            subs.subs.unsubscribe();
            delete this._TblSubs[key];
          }
        }
      }
      setTimeout(() => {
        this.UnSubscribe(null, true);
      }, 60 * 1000);
      return;
    }

    let retSubsKey: string =
      typeof e.length != undefined ? e[0].subsKey : e.subsKey;

    let subs: any = this._TblSubs[retSubsKey];

    if (subs) {
      let currSubs: number = this.SubsCounter();
      subs.subs.unsubscribe();
      this._TblSubs[retSubsKey] = null;
      delete this._TblSubs[retSubsKey];
    }
  }

  SubsCounter(): number {
    let ret: number = 0;
    for (var key in this._TblSubs) {
      ret++;
    }
    return ret;
  }

  GetRowById(key: number, resolve?:Function, reject?:Function): any {
    let keyField: string = this.keyName;
    let _newSubsKey: string = this.newSubsKey;
    let row: any = this.GetRows().find(r => r[keyField] == key);

    if (!row) {
      // execute request from the server

      this.Get({
        onSuccess: e => {
          this.UnSubscribe(e);
          if(resolve!=undefined) resolve(e);
        },
        onError: e => {
          //if(onError)onError(e);
          if(reject!=undefined) reject(e);
        },
        key: key,
        subsKey: _newSubsKey
      });
    }
    return row;
  }

  // GetRowById(key:number):any{return null;}  // dummy just suppress errors
  GetRowById_Obsolete(key: number): any {
    let keyField: string = this.keyName;
    return this.GetRows().find(r => r[keyField] == key);
  }

  SeekRecord(row: Array<any>): any {
    //this
    return this._derivedRecords.find(r => {
      return row[0] == r[this.keyName];
    });
  }

  Post(rec?: any) {
    // if no argument is supplied for posting all updated/new/deleted
    // if a record is supplied, post only the supplied record
  }

  // redefined in tables.ts to return a new instance of the derived row instead of the base row object
  NewRow(): any {}

  // redefined in tables.ts to return an array of the derived rows instead of array base rows object
  GetRows(): Array<any> {
    return [];
  }

  KeyColumns(prop: string, desc?: boolean): Array<ColumnInfo> {
    if (desc == undefined) desc = false;
    return this.columns
      .filter(e => {
        return e[prop] != -1;
      })
      .sort((a, b) => {
        return a[prop] < b[prop]
          ? 1
          : desc
          ? b[prop] < a[prop]
            ? -1
            : 0
          : b[prop] > a[prop]
          ? -1
          : 0;
      });
  }

  DataColumns(fieldNames: Array<string>): Array<ColumnInfo> {
    let ret: Array<ColumnInfo> = [];
    fieldNames.forEach(f => {
      ret.push(this.columns.find(c => c.name == f));
    });
    return ret;
  }

  InitializeTable(): void {
    this.keyFields = this.KeyColumns("keyPosition");
    this.keyGroupFields = this.KeyColumns("groupPosition");
    this.keyUniqueFields = this.KeyColumns("uniquePosition");
    this.keySortFields = this.KeyColumns("sortPosition");
    this.keyDisplayFields = this.KeyColumns("displayPosition");
  }

  get NewRows(): Array<any> {
    return this.GetRows()
      .filter(r => {
        return r._newId != null && r._newId != undefined;
      })
      .sort((a, b) => {
        // sort in descending order
        return a._newId < b._newId ? 1 : b._newId < a._newId ? -1 : 0;
      });
  }

  get TempId(): number {
    let newRows: Array<any> = this.NewRows;
    console.log("NewRows,",newRows)
    if (newRows.length == 0) {
      // if no new record has already been created
      return 1;
    } else {
      //return newRows[newRows.length-1]["_newId"]+1;
      return newRows[0]["_newId"] + 1;
    }
  }
}
