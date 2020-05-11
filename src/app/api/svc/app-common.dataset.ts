import { RequestParams } from './../mod/app-params.model';
import { AppReturn } from './../mod/app-return.model';
import { Subscription } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ColumnInfo } from '../mod/app-column.model';
import { AppCommonMethods } from './app-common.methods';
import { AppCommonMethodsService } from './app-common-methods.service';

export class DatasetBase extends AppCommonMethods {
  constructor(
    public http: HttpClient,
    public apiCommon?: AppCommonMethodsService
  ) {
    super();
    //this.apiCommon.tables = this.tables;
  }

  public tables: any = {};



  public AddTable(dataTable: any) {
    this.tables[dataTable.tableCode] = dataTable;
    return dataTable;
  }

  // declaration of property is necessary to gain access to it
  // locally during desing time, and when the value is overwritten
  // in the derived class, the new value will take effect even
  // even when used locally in the parent class....
  public apiUrl: string;

  public toPostData(table: any): any {
    let ret: Array<any> = [];

    let toPost: Array<any> = table.__dirtyRows();
    let link: Array<string> = table.TableLinks();
    let tableCode: string = null;
    let dirtyChildren: any = null;

    if (link != null) {
      // collect all dirty rows from all linked tables
      dirtyChildren = {};
      link.forEach((L) => {
        let linkArr: Array<string> = L.split('|');
        let tableCode: string = linkArr[0];
        let childTable = this.tables[tableCode];
        dirtyChildren[tableCode] = childTable.__dirtyRows();
      });
    }

    toPost.forEach((e) => {
      let dirtyData: any = this.CloneData(e.toPostData);
      ret.push(dirtyData);
      if (link != null) {
        let keyCol: ColumnInfo = table.keyFields[0];
        let key: number = e[keyCol.name];

        link.forEach((L) => {
          let linkArr: Array<string> = L.split('|');
          tableCode = linkArr[0];
          let childTable: any = this.tables[tableCode];
          let childDirtyRows: Array<any> = childTable.__dirtyRows(key);

          if (childDirtyRows.length != 0) {
            dirtyData[tableCode] = [];
            childDirtyRows.forEach((cr) => {
              dirtyData[tableCode].push(this.CloneData(cr.toPostData));
            });
          } else {
          }
        });
      }
    });
    return ret; // tableCode ? ret[tableCode] : ret;
  }

  Get(
    reqParams: Array<RequestParams>,
    args?: { onSuccess?: Function; onError?: Function }
  ): Subscription {
    // get table data based on base64 encoded json parameters

    const hdrs = new HttpHeaders();

    hdrs.set('Content-Type', 'application/json; charset=utf-8');
    hdrs.set('Access-Control-Allow-Origin', '*');
    hdrs.set(
      'Access-Control-Allow-Origin',
      'Origin, X-Requested-With, Content-Type, Accept'
    );

    // initialize parameter array
    const jsonParams: Array<any> = [];
    const jsonParamsStr: Array<string> = [];

    let reqConfig: RequestParams = null;

    reqParams.forEach((p) => {
      const jStr: string = JSON.stringify(p);
      if (
        !this.apiCommon.IsWithHistory(jStr) &&
        !this.apiCommon.IsWithPending(jStr)
      ) {
        const paramCode = p.code;
        // get table object
        if (paramCode == undefined) {
        } else {
          if (paramCode == '@config') {
            // set subsciption
            reqConfig = p;
          } else {
            const tbl: any = this.tables[paramCode];
            if (tbl != null) {
              // set pendingRequest flag on each table
              tbl.pendingRequest = true;

              // set request flag
              this.apiCommon.AddRequestFlag(jStr);
              jsonParamsStr.push(jStr);
            }
          }
          jsonParams.push(p);
        }
      }
    });

    // if all set of parameters are already in the history
    if (jsonParams.length == 0) {
      console.log('No request to process!');
      return;
    } else {
      console.log('There are ' + jsonParams.length + ' requests to process!');
    }

    // create request internally in the Get method
    if (reqConfig == null) reqConfig = new RequestParams();

    if (reqConfig.subsKey == undefined)
      reqConfig.subsKey = this.apiCommon.newSubsKey;
    if (reqConfig.code == undefined) reqConfig.code = '@config';

    jsonParams.push(reqConfig);

    // form url here with encoded parameters
    let url: string = this.apiUrl + '?_p=' + btoa(JSON.stringify(jsonParams));
    console.log(url);

    let ret: Subscription = this.http.get<Array<AppReturn>>(url).subscribe(
      (data: any) => {
        // process data including setting pendingRequest flag
        // for each table.
        this.apiCommon.ProcessRequestData(data, this.tables, url);

        // add request to history log. this log will be checked for subsequent requests
        // where calls for existing entries will be bypassed to improve performance efficiency
        jsonParamsStr.forEach((key) => this.apiCommon.AddHistoryLog(key));

        // this removes entry to collection if URL that is used to prevent same-request concurrency issues
        // request concurrency check is necessary to prevent duplicate records post-processing
        // action when similar multiple requests return back to the client.
        jsonParamsStr.forEach((key) => this.apiCommon.ClearRequestFlag(key));

        // call onSuccess parameter function if defined
        if (args) if (args.onSuccess != undefined) args.onSuccess(data);

        // unsubscrbe! to prevent memory leak
        this.apiCommon.UnSubscribe(data);

        // setTimeout(() => {
        //   console.log('Subscriptions!!!', this.apiCommon.TblSubs);
        // }, 5000);
      }, // end of success
      (error: any) => {
        // call onError parameter function if defined
        if (args) if (args.onError != undefined) args.onError(error);

        // clear flags for each table/request params
        jsonParams.forEach((p) => {
          const tbl: any = this.tables[p.code];
          if (tbl) tbl.pendingRequest = false;
        });
        jsonParamsStr.forEach((key) => this.apiCommon.ClearRequestFlag(key));
      }
    );
    //console.log('reqSubsKey:', reqConfig.subsKey);
    // log subscription to the subscription collection in apiCommon

    if (reqConfig.subsKey != undefined && reqConfig.subsKey != null) {
      this.apiCommon.TblSubs[reqConfig.subsKey] = { subs: ret, when: Date.now };
    }

    console.log('this.apiCommon.TblSubs:', this.apiCommon.TblSubs);
    return ret;
  }

  CloneData(data: any): any {
    return JSON.parse(JSON.stringify(data));
  }

  //public XL(text:string):string{
  // returns translation of english 'text' from the selected language if one is available
  //    return text;
  // }

  private GenTextKey(text: string) {
    return text.toLowerCase().replace(/ /gi, '_');
  }

  public StrKey(str: string): string {
    let ret: string = '';
    let strNorm: string = str.toLowerCase().replace(/  /gi, ' ');
    while (strNorm.indexOf('  ') != -1) {
      strNorm = strNorm.replace(/  /gi, ' ');
    }

    let wordArr: Array<string> = strNorm.split(' ');
    let word: string;
    let i: number;
    let j: number;

    for (i = 0; i < wordArr.length; i++) {
      let wordASC: number = 255;
      word = wordArr[i];

      for (j = 1; j <= word.length; j++) {
        wordASC = wordASC ^ (i + j + word.substr(j - 1, 1).charCodeAt(0));
      }
      ret += wordASC.toString(16);
    }

    return 'S' + ret.toUpperCase();
  }

  private _translations: any = {
    SEE91: 'Ilagay ang Text',
    S8D: 'Paglalarawam',
    SE4EB: 'Uri ng dokumento',
    SE2F6: 'Katangian ng Gumagamit',
  };

  public XL(text: string, args?: any) {
    // translate methos
    let key: string = this.StrKey(text);
    let ret: any = this._translations[key];
    if (ret) {
      return ret;
    } else {
      return text;
    }
    //console.log(charCodeAt(65))
  }
}
