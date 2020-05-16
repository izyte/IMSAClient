import { Relation } from './../api/svc/app-common.datatable';
import { AppCommonMethodsService } from '../api/svc/app-common-methods.service';
import { DatasetBase } from '../api/svc/app-common.dataset';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**Application tables *****/
/*
import { TblParent, TblParentRow, TblUsers, TblAnomalies } from './app.tables';
*/
//<INCLUDES>
import { TblAnomalies, TblAnomaliesRow } from './app.tables';
import { TblChangeTracker, TblChangeTrackerRow } from './app.tables';
import { TblFailureThreats, TblFailureThreatsRow } from './app.tables';
import { TblLookups, TblLookupsRow } from './app.tables';
import { TblNodesAttrib, TblNodesAttribRow } from './app.tables';
import { TblUserParam, TblUserParamRow } from './app.tables';
import { TblRefFiles, TblRefFilesRow } from './app.tables';
import { TblSurveyHeader, TblSurveyHeaderRow } from './app.tables';
import { TblSurveyPosition, TblSurveyPositionRow } from './app.tables';
import { TblTreeStruc, TblTreeStrucRow } from './app.tables';
import { TblUsers, TblUsersRow } from './app.tables';
//</INCLUDES>

@Injectable({
  providedIn: 'root',
})
export class AppDataset extends DatasetBase {
  APP_TITLE: string = 'My Application';
  APP_ICON: string = 'fa-id-card';

  NAV_BACK: string = '#2b579a';

  testRow: any = {
    table: {},
    an_id: 1,
  };

  constructor(
    public http: HttpClient,
    public apiCommon: AppCommonMethodsService
  ) {
    super(http);


//<RELATIONS>
    this.tblAnomalies.tableRelations.push(new Relation("rf", "lnk", this.tblAnomalies, this.tblRefFiles, "", "", false));
    this.tblAnomalies.tableRelations.push(new Relation("ft", "lnk", this.tblAnomalies, this.tblFailureThreats, "", "", false));
    this.tblAnomalies.tableRelations.push(new Relation("lkp", "lkp", this.tblAnomalies, this.tblLookups, "AN_STATUS", "LKP_ID", false));
    this.tblAnomalies.tableRelations.push(new Relation("node", "lkp", this.tblAnomalies, this.tblNodesAttrib, "AN_ASSET_ID", "REC_TAG", false));
    this.tblTreeStruc.tableRelations.push(new Relation("node", "1to1", this.tblTreeStruc, this.tblNodesAttrib, "TRE_DAT_TAG", "", false));
    this.tblTreeStruc.tableRelations.push(new Relation("tre", "1tom", this.tblTreeStruc, this.tblTreeStruc, "", "TRE_NOD_TAG_PAR", true));
//</RELATIONS>

  //<DECLARE>
  this.apiCommon.PARAMS_DELIM_CHAR = '`';
  this.apiCommon.PARAMS_VAL_DELIM_CHAR = ',';
  this.apiCommon.FIELD_PARENT_LINK_ALIAS = 'lnk_id';
  this.apiCommon.FIELD_CHILD_FIRST_ALIAS = 'lnk_child_first';
  this.apiCommon.FIELD_CHILD_COUNT_ALIAS = 'lnk_child_count';
  //</DECLARE>

  }




  //<INSTANTIATE>
  public tblAnomalies:TblAnomalies = this.AddTable(new TblAnomalies(this.http, this.apiUrl, this.tables, this.apiCommon));
  public tblChangeTracker:TblChangeTracker = this.AddTable(new TblChangeTracker(this.http, this.apiUrl, this.tables, this.apiCommon));
  public tblFailureThreats:TblFailureThreats = this.AddTable(new TblFailureThreats(this.http, this.apiUrl, this.tables, this.apiCommon));
  public tblLookups:TblLookups = this.AddTable(new TblLookups(this.http, this.apiUrl, this.tables, this.apiCommon));
  public tblNodesAttrib:TblNodesAttrib = this.AddTable(new TblNodesAttrib(this.http, this.apiUrl, this.tables, this.apiCommon));
  public tblUserParam:TblUserParam = this.AddTable(new TblUserParam(this.http, this.apiUrl, this.tables, this.apiCommon));
  public tblRefFiles:TblRefFiles = this.AddTable(new TblRefFiles(this.http, this.apiUrl, this.tables, this.apiCommon));
  public tblSurveyHeader:TblSurveyHeader = this.AddTable(new TblSurveyHeader(this.http, this.apiUrl, this.tables, this.apiCommon));
  public tblSurveyPosition:TblSurveyPosition = this.AddTable(new TblSurveyPosition(this.http, this.apiUrl, this.tables, this.apiCommon));
  public tblTreeStruc:TblTreeStruc = this.AddTable(new TblTreeStruc(this.http, this.apiUrl, this.tables, this.apiCommon));
  public tblUsers:TblUsers = this.AddTable(new TblUsers(this.http, this.apiUrl, this.tables, this.apiCommon));
//</INSTANTIATE>


  /*
  this.tblTableClass = this.AddTable(new TblTableClass(this.http,this.apiUrl,this.tables));
  */

  /************************** Application Specific Declarations and Methods *****************************/
// setup aplication source api url
  //public apiUrl: string = 'http://ngimsa.ivideolib.com/api/app';

  public get apuUrl():string{
    return "http://soga-alv/NgIMSAPub/api/app";
  }

  public get debugText():string{
    return "<b>Debug:</b>";
  }

  public mainTreeData:Array<any>=[];
  public rootNodeId:number = 4667;
  public mainTreeCurrentNode:any={};

  public menuList: Array<any> = [
    {
      id: 1,
      label: 'Modules',
      active: true,
      icon: 'fa fa-window-maximize',
      subMenu: [
        { id: 1, label: 'Anomaly', active: true },
        { id: 2, label: 'Design Data', active: false },
        { id: 3, label: 'Chemical Database', active: false },
        { id: 4, label: 'Risk Based Inspection', active: false },
        { id: 5, label: 'Survey Data', active: false },
        { id: 6, label: 'Freespan', active: false },
        { id: 7, label: 'Reference Library', active: false },
        { id: 8, label: 'Seismic', active: false },
      ],
    },
    {
      id: 2,
      label: 'Tools',
      active: false,
      icon: 'fa fa-wrench',
      subMenu: [
        { id: 9, label: 'User Management', active: false },
        { id: 10, label: 'Asset Management', active: false },
        { id: 11, label: 'Survey Upload', active: false },
      ],
    },
    { id: 3, label: 'Help', active: false, icon: 'fa fa-question-circle' },
    {
      id: 4,
      label: 'Hi User Name [id]',
      active: false,
      icon: 'fa fa-user ml-2',
    },
  ];



}
