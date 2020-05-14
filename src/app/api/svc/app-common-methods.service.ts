import { AppCommonMethods } from './app-common.methods';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppCommonMethodsService extends AppCommonMethods {
  constructor() {
    super();
  }

  /*******************************************************************
   * Declaration of public properties
   *******************************************************************/
  public PARAMS_DELIM_CHAR = '';
  public PARAMS_VAL_DELIM_CHAR = '';
  public FIELD_PARENT_LINK_ALIAS = '';
  public FIELD_CHILD_FIRST_ALIAS = '';
  public FIELD_CHILD_COUNT_ALIAS = '';

  public APP_CONFIG = {
    appTitleMain:"Main Application",
    appTitleSub:"Sub Title",
    appModules:[
      {}
    ]
  };


  private _TestProp: number = 0;
  public get TestProp(): number {
    return this._TestProp;
  }
  public set TestProp(value: number) {
    this._TestProp = value;
  }

  /*******************************************************************
   * Manage hitorical requests and current request
   *******************************************************************/

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

  AddHistoryLog(key: string) {
    let idx: number = this._historicalRequests.indexOf(key);
    if (idx == -1) this._historicalRequests.push(key);
  }

  ClearHistoryLog(key: string) {
    let idx: number = this._historicalRequests.indexOf(key);
    if (idx != -1) this._historicalRequests.splice(idx, 1);
  }

  IsWithPending(url: string): boolean {
    let idx: number = this._pendingRequests.indexOf(url);
    return idx != -1;
  }

  ClearRequestFlag(reqKey: string) {
    let idx: number = this._pendingRequests.indexOf(reqKey);
    if (idx != -1) this._pendingRequests.splice(idx, 1);
  }

  AddRequestFlag(reqKey: string) {
    let idx: number = this._pendingRequests.indexOf(reqKey);
    if (idx == -1) this._pendingRequests.push(reqKey);
  }

  ProcessRequestData(
    data: Array<any>,
    tables?: any,
    url?: string,
    reqTableCodes?: Array<string>
  ):Array<Array<any>> {
    if (!data || !tables) return;
    if (reqTableCodes == undefined) reqTableCodes = [];

    let tableRows:Array<Array<any>> = [];

    // find config object
    //config
    const reqConfig: Array<any> = data.find((o) => o.returnType == 'config');

    // filter only objects with returnType = 'table'
    let retTables: Array<any> = data.filter((o) => o.returnType == 'table');

    // loop through objects and call the local ProcessRequestedRecords method

    retTables.forEach((t) => {
      let tbl: any = tables[t.returnCode];

      // set pendingRequest flag for each table
      tbl.pendingRequest = false;

      // populate/update record(s) in the table object
      if (tbl) tableRows.push(tbl.ProcessRequestedRecords(t));
      else console.log("Table object '" + t.returnCode + "' not found!");
    });

    return tableRows;
  }
  // *******************************************************************
  // **********************  Subscription Management ****************************
  private _UnSubscribeCounter: number = 0;

  private _subsCounter: number = 0;
  public get newSubsKey(): string {
    this._subsCounter++;
    return 'sKey_' + this._subsCounter;
  }

  private _TblSubs: any = {};
  public get TblSubs(): any {
    return this._TblSubs;
  }

  UnSubscribe(e: any, abandoned?: boolean) {
    if (abandoned == undefined) abandoned = false;
    if (abandoned) {
      // clean all abandoned subscriptions which did not return to the client
      // after a duration set in seconds(e.g. dur=60*5 - i,e, 5mins);
      this._UnSubscribeCounter++;
      for (var key in this._TblSubs) {
        let subs: any = this._TblSubs[key];
        this._cl(
          'Unsubscribe abandoned!',
          abandoned,
          Date.now(),
          this._UnSubscribeCounter
        );
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

    // get Subscription key. If e is an array, get the first element then
    // get the subsKey property, else, get the subKey of the JSON object
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
}
