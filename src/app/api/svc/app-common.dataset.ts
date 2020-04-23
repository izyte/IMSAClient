import { HttpClient } from '@angular/common/http';
import { ColumnInfo } from '../mod/app-column.model';
import { AppCommonMethods } from './app-common.methods'; 

export class DatasetBase extends AppCommonMethods {

    constructor(public http: HttpClient) {
        super();
     }

    
    public tables:any = {};

    public AddTable(dataTable:any){
        this.tables[dataTable.tableCode] =  dataTable;
        return dataTable;
    }

    public toPostData(table:any):any{

        let ret:Array<any> = [];

        let toPost:Array<any>=table.__dirtyRows();
        let link:Array<string>=table.TableLinks();
        let tableCode:string=null;
        let dirtyChildren:any=null;
        
        if(link != null){
            // collect all dirty rows from all linked tables
            dirtyChildren = {};
            link.forEach(L=>{
                let linkArr:Array<string> = L.split("|");
                let tableCode:string =  linkArr[0];
                let childTable = this.tables[tableCode];
                dirtyChildren[tableCode] = childTable.__dirtyRows();
            })
        }

        toPost.forEach(e=>{
          let dirtyData:any = this.CloneData(e.toPostData);
          ret.push(dirtyData);
          if(link!=null){
              let keyCol:ColumnInfo = table.keyFields[0];
              let key:number = e[keyCol.name];

              link.forEach(L => {
                  let linkArr:Array<string> = L.split("|");
                  tableCode =linkArr[0];
                  let childTable:any = this.tables[tableCode];
                  let childDirtyRows:Array<any>=childTable.__dirtyRows(key);

                  if(childDirtyRows.length!=0){
                      dirtyData[tableCode]=[];
                      childDirtyRows.forEach(cr=>{
                        dirtyData[tableCode].push(this.CloneData(cr.toPostData));
                      })
                  }else{

                  }
              })
          }
        })        
        return ret; // tableCode ? ret[tableCode] : ret;
    }

    CloneData(data:any):any{
        return JSON.parse(JSON.stringify(data));
    }

    //public XL(text:string):string{
        // returns translation of english 'text' from the selected language if one is available
    //    return text;
   // }


    private GenTextKey(text:string){
        return text.toLowerCase().replace(/ /gi,'_');
    }

    public StrKey(str:string):string{
        let ret:string="";
        let strNorm:string=str.toLowerCase().replace(/  /gi," ");
        while(strNorm.indexOf("  ")!=-1){
            strNorm=strNorm.replace(/  /gi," ");
        } 

        let wordArr:Array<string>=strNorm.split(" ");
        let word:string;
        let i:number
        let j:number;

        for(i=0;i<wordArr.length;i++){
            let wordASC:number=255;
            word=wordArr[i];

            for(j=1;j<=word.length;j++){
                wordASC = wordASC ^ (i+j+word.substr(j-1,1).charCodeAt(0));
            }
            ret += wordASC.toString(16) ;
        }

        return 'S'+ ret.toUpperCase();
    }


    private _translations:any={
        "SEE91":"Ilagay ang Text",
        "S8D":"Paglalarawam",
        "SE4EB":"Uri ng dokumento",
        "SE2F6":"Katangian ng Gumagamit",
    };

    public XL(text:string,args?:any){
        // translate methos
        let key:string = this.StrKey(text);
        let ret:any=this._translations[key];
        if(ret){
            return ret;
        }else{
            return text;
        }
        //console.log(charCodeAt(65))
    }

}