import { AppCommonMethods } from './app-common.methods';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppCommonMethodsService extends AppCommonMethods {
  constructor() {
    super();
  }

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
    // console.log("AddHistoryLog...",key);
    let idx: number = this._historicalRequests.indexOf(key);
    if (idx == -1) this._historicalRequests.push(key);
  }

  ClearHistoryLog(key: string) {
    // console.log('ClearHistoryLog', key);
    let idx: number = this._historicalRequests.indexOf(key);
    if (idx != -1) this._historicalRequests.splice(idx, 1);
  }

  IsWithPending(url: string): boolean {
    let idx: number = this._pendingRequests.indexOf(url);
    return idx != -1;
  }

  ClearRequestFlag(reqKey: string) {
    // console.log('Clear request flag', reqKey);
    let idx: number = this._pendingRequests.indexOf(reqKey);
    if (idx != -1) this._pendingRequests.splice(idx, 1);
  }

  AddRequestFlag(reqKey: string) {
    let idx: number = this._pendingRequests.indexOf(reqKey);
    if (idx == -1) this._pendingRequests.push(reqKey);
  }

  ProcessRequestData(data: Array<any>, tables?: any, url?: string, reqTableCodes?:Array<string>) {
    if (!data || !tables) return;
    if(reqTableCodes==undefined) reqTableCodes=[];

    // filter only objects with returnType = 'table'
    let retTables: Array<any> = data.filter((o) => o.returnType == 'table');

    // loop through objects and call the local ProcessRequestedRecords method
    retTables.forEach((t) => {
      let tbl: any = tables[t.returnCode];

      // set pendingRequest flag for each table
      tbl.pendingRequest = false;

      // populate/update record(s) in the table object
      if (tbl) tbl.ProcessRequestedRecords(t);
      else console.log("Table object '" + t.returnCode + "' not found!");

    });
  }
  // *******************************************************************
}
