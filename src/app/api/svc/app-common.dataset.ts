import { AppReturn } from './../../../../docs/src/app/api/mod/app-return.model';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    Get(args?: {
      onSuccess?: Function;
      onError?: Function;
      key?: any;
      keyFields?: any;
      subsKey?: string;
    }):Subscription {
      // get table data based on base64 encoded json parameters
      const hdrs = new HttpHeaders();

      hdrs.set('Content-Type', 'application/json; charset=utf-8');
      hdrs.set('Access-Control-Allow-Origin', '*');
      hdrs.set(
        'Access-Control-Allow-Origin',
        'Origin, X-Requested-With, Content-Type, Accept'
      );

        let url:string;
      // let ret: Subscription = this.http.get<AppReturn>(url).subscribe(
      //   (data: any) => {
      //     // recs will have the array of returned records if the
      //     // server-side return value is a single table object
      //     let retObj: any = null;
      //     let recs: Array<any> = data.recordsList;
      //     if (data.recordsList) {
      //       retObj = data;
      //     } else {
      //       // recs is null if data is an array of AppReturn
      //       // need to find data specific to the current table
      //       // using the tableCode property

      //       // iterate through the results array element where the returnType == 'table'
      //       // then call tableObj.ProcessRequestedRecords for each return object
      //       // this is to allow processing multi-recordset in a single request

      //       // filter only objects with returnType = 'table'
      //       let retTables: Array<any> = data.filter(
      //         (o) => o.returnType == 'table'
      //       );

      //       // loop through objects and call the local ProcessRequestedRecords method
      //       retTables.forEach((t) => {
      //         let tbl: any = this.tables[t.returnCode];

      //         if (tbl) tbl.ProcessRequestedRecords(t);
      //         else console.log("Table object '" + t.returnCode + "' not found!");
      //       });
      //     }

      //     // call onSuccess parameter function if defined
      //     if (args) if (args.onSuccess != undefined) args.onSuccess(data);
      //     this.pendingRequest = false;

      //     // add request to history log. this log will be checked for subsequent requests
      //     // where calls for existing entries will be bypassed to improve performance efficiency
      //     this.AddHistoryLog(url);

      //     // this removes entry to collection if URL that is used to prevent same-request concurrency issues
      //     // request concurrency check is necessary to prevent duplicate records post-processing
      //     // action when similar multiple requests return back to the client.
      //     this.ClearRequestFlag(url);
      //   }, // end of success
      //   (error: any) => {
      //     // call onError parameter function if defined
      //     if (args) if (args.onError != undefined) args.onError(error);
      //     this.pendingRequest = false;
      //     this.ClearRequestFlag(url);
      //   }
      // );

      // return ret;
      return null;
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
