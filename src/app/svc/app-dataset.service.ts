import { DatasetBase } from "../api/svc/app-common.dataset";
import { Subscription } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/**Application tables *****/
/*
import { TblParent, TblParentRow, TblUsers } from './app.tables';
*/
//<INCLUDES>
import { TblAnomalies, TblAnomaliesRow } from './app.tables';
import { TblChangeTracker, TblChangeTrackerRow } from './app.tables';
import { TblFailureThreats, TblFailureThreatsRow } from './app.tables';
import { TblLookups, TblLookupsRow } from './app.tables';
import { TblNodesAttrib, TblNodesAttribRow } from './app.tables';
import { TblUserParam, TblUserParamRow } from './app.tables';
import { TblRefFiles, TblRefFilesRow } from './app.tables';
import { TblTreeStruc, TblTreeStrucRow } from './app.tables';
import { TblUsers, TblUsersRow } from './app.tables';
//</INCLUDES>

@Injectable({
  providedIn: "root"
})
export class AppDataset extends DatasetBase {
  APP_TITLE: string = "My Application";
  APP_ICON: string = "fa-id-card";

  NAV_BACK: string = "#2b579a";

  testRow: any = {
    table: {},
    an_id: 1
  };

  constructor(public http: HttpClient) {
    super(http);
  }

  // setup aplication source api url
  public apiUrl: string = "http://soga-alv/NgArbi/api/app";

//<INSTANTIATE>
public tblAnomalies:TblAnomalies = this.AddTable(new TblAnomalies(this.http, this.apiUrl, this.tables));
public tblChangeTracker:TblChangeTracker = this.AddTable(new TblChangeTracker(this.http, this.apiUrl, this.tables));
public tblFailureThreats:TblFailureThreats = this.AddTable(new TblFailureThreats(this.http, this.apiUrl, this.tables));
public tblLookups:TblLookups = this.AddTable(new TblLookups(this.http, this.apiUrl, this.tables));
public tblNodesAttrib:TblNodesAttrib = this.AddTable(new TblNodesAttrib(this.http, this.apiUrl, this.tables));
public tblUserParam:TblUserParam = this.AddTable(new TblUserParam(this.http, this.apiUrl, this.tables));
public tblRefFiles:TblRefFiles = this.AddTable(new TblRefFiles(this.http, this.apiUrl, this.tables));
public tblTreeStruc:TblTreeStruc = this.AddTable(new TblTreeStruc(this.http, this.apiUrl, this.tables));
public tblUsers:TblUsers = this.AddTable(new TblUsers(this.http, this.apiUrl, this.tables));
//</INSTANTIATE>

  /*
  this.tblTableClass = this.AddTable(new TblTableClass(this.http,this.apiUrl,this.tables));
  */

  /************************** Application Specific Methods ******************************************/


}
