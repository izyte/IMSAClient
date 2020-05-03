import { AppCommonMethods } from './app-common.methods';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppCommonMethodsService extends AppCommonMethods {
  constructor() {
    super();
  }

  private _TestProp:number=0;
  public get TestProp():number{
    return this._TestProp;
  }
  public set TestProp(value:number){
    this._TestProp=value;
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

  AddHistoryLog(url: string) {
    let idx: number = this._historicalRequests.indexOf(url);
    if (idx == -1) this._historicalRequests.push(url);
  }

  ClearHistoryLog(url: string) {
    console.log("ClearHistoryLog",url);
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
  // *******************************************************************


}
