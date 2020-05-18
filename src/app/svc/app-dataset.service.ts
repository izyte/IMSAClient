import { TreeViewNode } from './../api/cmp/tree-view/tree-view.component';
import { Relation } from './../api/svc/app-common.datatable';
import { AppCommonMethodsService } from '../api/svc/app-common-methods.service';
import { DatasetBase } from '../api/svc/app-common.dataset';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as appConfig from '../../assets/config/cfg.json';

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
    this.tblTreeStruc.tableRelations.push(new Relation("an", "1tom", this.tblTreeStruc, this.tblAnomalies, "TRE_DAT_TAG", "AN_ASSET_ID", true));
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

  public get apiUrl(): string {
    return this.isDeployed
      ? appConfig.general.url_deploy
      : appConfig.general.url_local;
  }

  public get isDeployed(): boolean {
    return location.hostname != 'localhost' || appConfig.general.url_use_deploy;
  }

  public colorDefinitions: any = appConfig.general.color_defs;

  public get debugText(): string {
    return '<b>Debug:</b>';
  }

  private _errorObject: any = { type: '', trace: [] };
  public get errorObject(): any {
    return this._errorObject;
  }
  public clearError() {
    this._errorObject = { type: '', trace: [] };
  }
  public set errorObject(value: any) {
    let err: any = {};

    if (value.status == 500) {
      err.type = value.statusText;
      err.url = value.url;
      err.name = value.name;
      err.message = value.message;
      err.status = value.status;
    }
    this._errorObject = err;
  }

  public mainTreeData: Array<TreeViewNode> = [];
  public rootNodeId: number = 4667;
  public mainTreeCurrentNode: any = {};

  public get currTreeNode():TreeViewNode{
    return this.mainTreeData.find((r:TreeViewNode)=>r.current);
  }

  // read setup configuration properties
  public menuList: Array<any> = appConfig.app_menu;
  public treeInitLocationPattern = this.isDeployed
    ? appConfig.tree_init_config.tree_location_filter_pattern_deploy
    : appConfig.tree_init_config.tree_location_filter_pattern;
  public extractNodeFields = appConfig.tree_init_config.tree_extract_node_fields;
  public extractTreeFields = appConfig.tree_init_config.tree_extract_tree_fields;

  public childExtractLevels(parentTreeLocation?: string): string {

    if (parentTreeLocation == undefined)
      parentTreeLocation = appConfig.tree_init_config.tree_root_location;

    const childLevels = appConfig.tree_init_config.tree_child_extract_levels;

    let ret: string = '';
    for (let idx = 1; idx <= childLevels; idx++) {
      ret += (idx > 1 ? ',' : '') + parentTreeLocation;
      for (let h = 1; h <= idx; h++) {
        ret += '__';
      }
    }
    return ret;
  }

  //*********************** Common Data Filter by Tree Location *****************************************/
  // dictionary of filtered table data array where keys are set to the tableCode
  private _subData = {};
  // dictionary of asset id where keys are set to the tableCode
  private _prevAsset = {};
  public treeFilteredData(dataTable:any,filterField:string): Array<any> {
    const treeNode = this.currTreeNode;
    const treeData = this.mainTreeData;
    const rows = dataTable.rows;
    const tableCode = dataTable.tableCode;

    if (treeData == null || treeNode == null || rows.length == 0) return [];

    if (this._prevAsset[tableCode] != treeNode.id) {
      this._subData[tableCode] = [];

      // get all assets under the selected location
      const subLocations = treeData.filter((n: TreeViewNode) =>n.loc.startsWith(treeNode.loc));

      if (subLocations) {
        // iterate through the selected nodes and filter all anomalies under each location
        subLocations.forEach((r: TreeViewNode) => {
          const anoms = rows.filter((row) => row[filterField] == r.did);
          anoms.forEach((ar: TblAnomaliesRow) => this._subData[tableCode].push(ar));
        });
      }
      this._prevAsset = treeNode.id;
    }
    return this._subData[tableCode];
  }
  //***************************************************************************************/

  //***************************** Extract data *********************************/

  private _mainData:any = {};
  public UpdateData(dataTable:any, getDataForBranch?:boolean) {
    if(!getDataForBranch) getDataForBranch =false;
    const treeNode = this.currTreeNode;
    if(!treeNode)return; // no current node is selected, exit nothing to process

    const tableCode = dataTable.tableCode;
    if (!this._mainData[tableCode]) {
      // get all anomaly records if retrieval has not been made yet
      this.Get([{ code: tableCode }], {
        onSuccess: (data) => {
          console.log(data);
          this._mainData[tableCode] = dataTable.rows;
        },
        onError: (err) => {
          console.log(err);
        },
      });
    }
  }

}
