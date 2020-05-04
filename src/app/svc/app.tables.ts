/***********************************************************************
* Automatically generated on 5/4/2020 3:50:50 PM
***********************************************************************/

import { AppCommonMethodsService } from '../api/svc/app-common-methods.service';
import { HttpClient } from '@angular/common/http';
import { TableBase } from '../api/svc/app-common.datatable';
import { TableRowBase }from '../api/svc/app-common.datarow';
import { ColumnInfo } from '../api/mod/app-column.model';






export class TblAnomalies extends TableBase {

  public rows:Array<TblAnomaliesRow> = [];

  public tableFieldPrefix="AN_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="an";

	this.columns.push(new ColumnInfo('AN_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_REF', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASSET_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TYPE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_STATUS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RAISED_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RAISED_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ORIG_CLASS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_CURR_CLASS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_REVNO', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASS_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASS_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_BY_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_PARTY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_MAINT_REQ', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_WO_REF', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_WO_STATUS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DATE_IDENT', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ACT_REQ', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_EQ_FAILURE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_APPROVED', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_NAME', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_TA_APPR_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ORIG_AVAIL_CLASS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_CURR_AVAIL_CLASS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_UPD_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_UPD_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_UPD_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_UPD_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_FNCR_REQUIRED', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_FNCR', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_LIFE_TERM', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_PORTFOLIO_APPL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_SEVERITY', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_LIKELIHOOD', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_START_EAST', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_END_EAST', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_DESC', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('AN_START_NORTH', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_END_NORTH', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_NOTIFICATION_REF', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RECCMD', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('AN_NOTIFICATION_STATUS', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ASSMNT', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('AN_DELETED', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_AVAIL_COMMENTS', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('AN_TITLE', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_ATTACHMENTS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('AN_RISK_RANK_COMMENTS', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('ITV_ANOM_REF', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_MOBIL', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_PROD_RSTO', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TYPE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_DIAGNOSTIC', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_TYPE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_CATEGORY', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_PLAN_PROC', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_MOBIL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_ACTUAL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TIME_DEMOB', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_WEATHER', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_ROV', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_VESSEL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_VEND_EQPT', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_TTIME_OTHER', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_AFE_COST', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_ACTUAL_COST', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_DATE_ACTUAL_COST', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_WBS_NUMBER', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_UPDATED', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_UPDATED_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_SUMMARY', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_NAME', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_PARENT_ANOM_REV', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_LEARNING', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('ITV_AFE_SHELL_SHARE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_VESSEL_DAY_RATE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITV_WELL_DOWNTIME', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblAnomaliesRow):TblAnomaliesRow
  {
    return super.Add(row);
  }

  NewRow():TblAnomaliesRow{return new TblAnomaliesRow();}
  GetRows():Array<TblAnomaliesRow>{return this.rows;}
  public set currentRow(value:TblAnomaliesRow){super.__currentRow(value);}
  public get currentRow():TblAnomaliesRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblAnomaliesRow>{return super.__dirtyRows();}
  public get newRows():Array<TblAnomaliesRow>{return super.__newRows();}


}

export class TblAnomaliesRow extends TableRowBase{
	constructor(
		public AN_ID?:number, 
		public AN_REF?:string, 
		public AN_ASSET_ID?:number, 
		public AN_TYPE?:number, 
		public AN_STATUS?:number, 
		public AN_RAISED_BY?:string, 
		public AN_RAISED_DATE?:Date, 
		public AN_ORIG_CLASS?:number, 
		public AN_CURR_CLASS?:number, 
		public AN_REVNO?:string, 
		public AN_ASS_DATE?:Date, 
		public AN_ASS_BY?:string, 
		public AN_ACT_BY_DATE?:Date, 
		public AN_ACT_PARTY?:string, 
		public AN_MAINT_REQ?:number, 
		public AN_WO_REF?:string, 
		public AN_WO_STATUS?:number, 
		public AN_DATE_IDENT?:Date, 
		public AN_ACT_REQ?:number, 
		public AN_EQ_FAILURE?:number, 
		public AN_TA_APPROVED?:number, 
		public AN_TA_NAME?:string, 
		public AN_TA_APPR_DATE?:Date, 
		public AN_ORIG_AVAIL_CLASS?:number, 
		public AN_CURR_AVAIL_CLASS?:number, 
		public AN_AVAIL_UPD_DATE?:Date, 
		public AN_AVAIL_UPD_BY?:string, 
		public AN_UPD_DATE?:Date, 
		public AN_UPD_BY?:string, 
		public AN_FNCR_REQUIRED?:number, 
		public AN_FNCR?:string, 
		public AN_LIFE_TERM?:number, 
		public AN_PORTFOLIO_APPL?:number, 
		public AN_RISK_RANK_SEVERITY?:number, 
		public AN_RISK_RANK_LIKELIHOOD?:number, 
		public AN_START_EAST?:number, 
		public AN_END_EAST?:number, 
		public AN_DESC?:string, 
		public AN_START_NORTH?:number, 
		public AN_END_NORTH?:number, 
		public AN_NOTIFICATION_REF?:string, 
		public AN_RECCMD?:string, 
		public AN_NOTIFICATION_STATUS?:string, 
		public AN_ASSMNT?:string, 
		public AN_DELETED?:number, 
		public AN_AVAIL_COMMENTS?:string, 
		public AN_TITLE?:string, 
		public AN_ATTACHMENTS?:number, 
		public AN_RISK_RANK_COMMENTS?:string, 
		public ITV_ANOM_REF?:string, 
		public ITV_DATE_MOBIL?:Date, 
		public ITV_DATE_PROD_RSTO?:Date, 
		public ITV_TYPE?:number, 
		public ITV_TIME_DIAGNOSTIC?:number, 
		public ITV_VESSEL_TYPE?:number, 
		public ITV_CATEGORY?:number, 
		public ITV_TIME_PLAN_PROC?:number, 
		public ITV_TIME_MOBIL?:number, 
		public ITV_TIME_ACTUAL?:number, 
		public ITV_TIME_DEMOB?:number, 
		public ITV_TTIME_WEATHER?:number, 
		public ITV_TTIME_ROV?:number, 
		public ITV_TTIME_VESSEL?:number, 
		public ITV_TTIME_VEND_EQPT?:number, 
		public ITV_TTIME_OTHER?:number, 
		public ITV_AFE_COST?:number, 
		public ITV_ACTUAL_COST?:number, 
		public ITV_DATE_ACTUAL_COST?:Date, 
		public ITV_WBS_NUMBER?:string, 
		public ITV_UPDATED?:Date, 
		public ITV_UPDATED_BY?:string, 
		public ITV_SUMMARY?:string, 
		public ITV_VESSEL_NAME?:string, 
		public ITV_PARENT_ANOM_REV?:string, 
		public ITV_LEARNING?:string, 
		public ITV_AFE_SHELL_SHARE?:number, 
		public ITV_VESSEL_DAY_RATE?:number, 
		public ITV_WELL_DOWNTIME?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblAnomalies{ return super._Table(); }


}




export class TblChangeTracker extends TableBase {

  public rows:Array<TblChangeTrackerRow> = [];

  public tableFieldPrefix="trk_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="chgTrack";

	this.columns.push(new ColumnInfo('trk_id', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_user_login', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_table_code', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_field_name', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_action', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_key_value', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_stamp', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('trk_rec_info', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));

    this.InitializeTable();

  }

  Add(row?:TblChangeTrackerRow):TblChangeTrackerRow
  {
    return super.Add(row);
  }

  NewRow():TblChangeTrackerRow{return new TblChangeTrackerRow();}
  GetRows():Array<TblChangeTrackerRow>{return this.rows;}
  public set currentRow(value:TblChangeTrackerRow){super.__currentRow(value);}
  public get currentRow():TblChangeTrackerRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblChangeTrackerRow>{return super.__dirtyRows();}
  public get newRows():Array<TblChangeTrackerRow>{return super.__newRows();}


}

export class TblChangeTrackerRow extends TableRowBase{
	constructor(
		public trk_id?:number, 
		public trk_user_login?:string, 
		public trk_table_code?:string, 
		public trk_field_name?:string, 
		public trk_action?:string, 
		public trk_key_value?:string, 
		public trk_stamp?:string, 
		public trk_rec_info?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblChangeTracker{ return super._Table(); }


}




export class TblFailureThreats extends TableBase {

  public rows:Array<TblFailureThreatsRow> = [];

  public tableFieldPrefix="FT_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="ft";

	this.columns.push(new ColumnInfo('FT_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_CODE', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_NAME', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_GROUP', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_TYPE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_CORR_REL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('FT_DESC', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('FT_INCLUDE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblFailureThreatsRow):TblFailureThreatsRow
  {
    return super.Add(row);
  }

  NewRow():TblFailureThreatsRow{return new TblFailureThreatsRow();}
  GetRows():Array<TblFailureThreatsRow>{return this.rows;}
  public set currentRow(value:TblFailureThreatsRow){super.__currentRow(value);}
  public get currentRow():TblFailureThreatsRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblFailureThreatsRow>{return super.__dirtyRows();}
  public get newRows():Array<TblFailureThreatsRow>{return super.__newRows();}


}

export class TblFailureThreatsRow extends TableRowBase{
	constructor(
		public FT_ID?:number, 
		public FT_CODE?:string, 
		public FT_NAME?:string, 
		public FT_GROUP?:number, 
		public FT_TYPE?:number, 
		public FT_CORR_REL?:number, 
		public FT_DESC?:string, 
		public FT_INCLUDE?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblFailureThreats{ return super._Table(); }


}




export class TblLookups extends TableBase {

  public rows:Array<TblLookupsRow> = [];

  public tableFieldPrefix="LKP_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="lkp";

	this.columns.push(new ColumnInfo('LKP_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_GRP_ID', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DESC_A', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DESC_B', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_TEXT_50_1', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_TEXT_50_2', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_TEXT_255_1', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_TEXT_255_2', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_LONG_1', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_LONG_2', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_LONG_3', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_LONG_4', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DOUBLE_1', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DOUBLE_2', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DOUBLE_3', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_BOOLEAN_1', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_BOOLEAN_2', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_BOOLEAN_3', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_DATE_1', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_ORDER', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_SWITCHES', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_MEMO_1', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('LKP_OLE_1', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('LKP_Created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_CreatedBy', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_Updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LKP_UpdatedBy', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblLookupsRow):TblLookupsRow
  {
    return super.Add(row);
  }

  NewRow():TblLookupsRow{return new TblLookupsRow();}
  GetRows():Array<TblLookupsRow>{return this.rows;}
  public set currentRow(value:TblLookupsRow){super.__currentRow(value);}
  public get currentRow():TblLookupsRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblLookupsRow>{return super.__dirtyRows();}
  public get newRows():Array<TblLookupsRow>{return super.__newRows();}


}

export class TblLookupsRow extends TableRowBase{
	constructor(
		public LKP_ID?:number, 
		public LKP_GRP_ID?:number, 
		public LKP_DESC_A?:string, 
		public LKP_DESC_B?:string, 
		public LKP_TEXT_50_1?:string, 
		public LKP_TEXT_50_2?:string, 
		public LKP_TEXT_255_1?:string, 
		public LKP_TEXT_255_2?:string, 
		public LKP_LONG_1?:number, 
		public LKP_LONG_2?:number, 
		public LKP_LONG_3?:number, 
		public LKP_LONG_4?:number, 
		public LKP_DOUBLE_1?:number, 
		public LKP_DOUBLE_2?:number, 
		public LKP_DOUBLE_3?:number, 
		public LKP_BOOLEAN_1?:number, 
		public LKP_BOOLEAN_2?:number, 
		public LKP_BOOLEAN_3?:number, 
		public LKP_DATE_1?:Date, 
		public LKP_ORDER?:number, 
		public LKP_SWITCHES?:number, 
		public LKP_MEMO_1?:string, 
		public LKP_OLE_1?:string, 
		public LKP_Created?:Date, 
		public LKP_CreatedBy?:string, 
		public LKP_Updated?:Date, 
		public LKP_UpdatedBy?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblLookups{ return super._Table(); }


}




export class TblNodesAttrib extends TableBase {

  public rows:Array<TblNodesAttribRow> = [];

  public tableFieldPrefix="NODE_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="node";

	this.columns.push(new ColumnInfo('REC_TAG', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_ID', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_DESC', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_GROUP', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_CLASS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_TAG', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_ASSET_TYPE', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SAP_REF', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SAP_TAG', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SAP_DESC', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('REF_DWG', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SPLI', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('VUL_EQUT', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('VUL_CAT', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_GROUP_B', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITEM_TYPE', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('OREDA_CLSS', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('OREDA_SUBUNIT', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('OREDA_CPNT', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('LL_FOLDER_OBJID', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('REC_UPDATED', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITEM_TYPE_TAG', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('HAZ_REFERENCE', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('POF_GROUP_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RBI_INCLUDE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SCE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('ITEM_USED', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_Created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_CreatedBy', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_Updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('NODE_UpdatedBy', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblNodesAttribRow):TblNodesAttribRow
  {
    return super.Add(row);
  }

  NewRow():TblNodesAttribRow{return new TblNodesAttribRow();}
  GetRows():Array<TblNodesAttribRow>{return this.rows;}
  public set currentRow(value:TblNodesAttribRow){super.__currentRow(value);}
  public get currentRow():TblNodesAttribRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblNodesAttribRow>{return super.__dirtyRows();}
  public get newRows():Array<TblNodesAttribRow>{return super.__newRows();}


}

export class TblNodesAttribRow extends TableRowBase{
	constructor(
		public REC_TAG?:number, 
		public NODE_ID?:string, 
		public NODE_DESC?:string, 
		public NODE_GROUP?:string, 
		public NODE_CLASS?:number, 
		public NODE_TAG?:number, 
		public NODE_ASSET_TYPE?:string, 
		public SAP_REF?:string, 
		public SAP_TAG?:number, 
		public SAP_DESC?:string, 
		public REF_DWG?:number, 
		public SPLI?:string, 
		public VUL_EQUT?:string, 
		public VUL_CAT?:string, 
		public NODE_GROUP_B?:string, 
		public ITEM_TYPE?:string, 
		public OREDA_CLSS?:string, 
		public OREDA_SUBUNIT?:string, 
		public OREDA_CPNT?:string, 
		public LL_FOLDER_OBJID?:string, 
		public REC_UPDATED?:Date, 
		public ITEM_TYPE_TAG?:number, 
		public HAZ_REFERENCE?:string, 
		public POF_GROUP_ID?:number, 
		public RBI_INCLUDE?:number, 
		public SCE?:number, 
		public ITEM_USED?:number, 
		public NODE_Created?:Date, 
		public NODE_CreatedBy?:string, 
		public NODE_Updated?:Date, 
		public NODE_UpdatedBy?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblNodesAttrib{ return super._Table(); }


}




export class TblUserParam extends TableBase {

  public rows:Array<TblUserParamRow> = [];

  public tableFieldPrefix="PARAM_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="param";

	this.columns.push(new ColumnInfo('PARAM_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_USER_ID', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_TYP_LKP_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_VAL_LKP_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_TEXT', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_Created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_CreatedBy', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_Updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('PARAM_UpdatedBy', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblUserParamRow):TblUserParamRow
  {
    return super.Add(row);
  }

  NewRow():TblUserParamRow{return new TblUserParamRow();}
  GetRows():Array<TblUserParamRow>{return this.rows;}
  public set currentRow(value:TblUserParamRow){super.__currentRow(value);}
  public get currentRow():TblUserParamRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblUserParamRow>{return super.__dirtyRows();}
  public get newRows():Array<TblUserParamRow>{return super.__newRows();}


}

export class TblUserParamRow extends TableRowBase{
	constructor(
		public PARAM_ID?:number, 
		public PARAM_USER_ID?:number, 
		public PARAM_TYP_LKP_ID?:number, 
		public PARAM_VAL_LKP_ID?:number, 
		public PARAM_TEXT?:string, 
		public PARAM_Created?:Date, 
		public PARAM_CreatedBy?:string, 
		public PARAM_Updated?:Date, 
		public PARAM_UpdatedBy?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblUserParam{ return super._Table(); }


}




export class TblRefFiles extends TableBase {

  public rows:Array<TblRefFilesRow> = [];

  public tableFieldPrefix="RF_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="rf";

	this.columns.push(new ColumnInfo('RF_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_TYPE', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_DESC', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_CLASS', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_UPLDATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_REF_NO', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_REVNO', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_REVDATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_FILENAME', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_PATH', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_REFNOX', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_CONTRACTOR', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_ASSET', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_LLID', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_UPDBY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_UPDDATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('RF_NOTES', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));

    this.InitializeTable();

  }

  Add(row?:TblRefFilesRow):TblRefFilesRow
  {
    return super.Add(row);
  }

  NewRow():TblRefFilesRow{return new TblRefFilesRow();}
  GetRows():Array<TblRefFilesRow>{return this.rows;}
  public set currentRow(value:TblRefFilesRow){super.__currentRow(value);}
  public get currentRow():TblRefFilesRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblRefFilesRow>{return super.__dirtyRows();}
  public get newRows():Array<TblRefFilesRow>{return super.__newRows();}


}

export class TblRefFilesRow extends TableRowBase{
	constructor(
		public RF_ID?:number, 
		public RF_TYPE?:number, 
		public RF_DESC?:string, 
		public RF_CLASS?:number, 
		public RF_UPLDATE?:Date, 
		public RF_REF_NO?:string, 
		public RF_REVNO?:string, 
		public RF_REVDATE?:Date, 
		public RF_FILENAME?:string, 
		public RF_PATH?:number, 
		public RF_REFNOX?:string, 
		public RF_CONTRACTOR?:string, 
		public RF_ASSET?:number, 
		public RF_LLID?:string, 
		public RF_UPDBY?:string, 
		public RF_UPDDATE?:Date, 
		public RF_NOTES?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblRefFiles{ return super._Table(); }


}




export class TblSurveyHeader extends TableBase {

  public rows:Array<TblSurveyHeaderRow> = [];

  public tableFieldPrefix="SVY_HDR_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="svyhdr";

	this.columns.push(new ColumnInfo('SVY_HDR_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_EVT_ID', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_MAIN_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_EVT_NUM', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_NOD_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_START_POS_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_END_POS_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_RECORDER', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_COMMENT', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('SVY_HDR_UPDATE_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_UPDATE_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_COLOUR', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ASS_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ASS_BY', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ANOM_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_A', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_B', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_C', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_D', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_E', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_F', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_G', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_H', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_I', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_YESNO_J', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_A', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_B', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_C', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_D', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_E', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_F', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_G', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_H', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_I', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_TEXT_J', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_MEMO_A', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('SVY_MEMO_B', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('SVY_MEMO_C', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('SVY_MEMO_D', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_A', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_B', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_C', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_D', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_E', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_DATETIME_F', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_A', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_B', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_C', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_D', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_INTEGER_E', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ASS_DETAILS', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('AB_HDR_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_PAR_ID', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ANOM_CODE', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_HDR_ANOM_COMMENT', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_F', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_G', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_H', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_I', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_J', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_K', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_L', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_A', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_B', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_C', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_D', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_SINGLE_E', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblSurveyHeaderRow):TblSurveyHeaderRow
  {
    return super.Add(row);
  }

  NewRow():TblSurveyHeaderRow{return new TblSurveyHeaderRow();}
  GetRows():Array<TblSurveyHeaderRow>{return this.rows;}
  public set currentRow(value:TblSurveyHeaderRow){super.__currentRow(value);}
  public get currentRow():TblSurveyHeaderRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblSurveyHeaderRow>{return super.__dirtyRows();}
  public get newRows():Array<TblSurveyHeaderRow>{return super.__newRows();}


}

export class TblSurveyHeaderRow extends TableRowBase{
	constructor(
		public SVY_HDR_ID?:number, 
		public SVY_HDR_EVT_ID?:number, 
		public SVY_HDR_MAIN_ID?:number, 
		public SVY_HDR_EVT_NUM?:number, 
		public SVY_HDR_NOD_ID?:number, 
		public SVY_HDR_START_POS_ID?:number, 
		public SVY_HDR_END_POS_ID?:number, 
		public SVY_HDR_RECORDER?:string, 
		public SVY_HDR_COMMENT?:string, 
		public SVY_HDR_UPDATE_DATE?:Date, 
		public SVY_HDR_UPDATE_BY?:string, 
		public SVY_HDR_COLOUR?:number, 
		public SVY_HDR_ASS_DATE?:Date, 
		public SVY_HDR_ASS_BY?:string, 
		public SVY_HDR_ANOM_ID?:number, 
		public SVY_YESNO_A?:number, 
		public SVY_YESNO_B?:number, 
		public SVY_YESNO_C?:number, 
		public SVY_YESNO_D?:number, 
		public SVY_YESNO_E?:number, 
		public SVY_YESNO_F?:number, 
		public SVY_YESNO_G?:number, 
		public SVY_YESNO_H?:number, 
		public SVY_YESNO_I?:number, 
		public SVY_YESNO_J?:number, 
		public SVY_TEXT_A?:string, 
		public SVY_TEXT_B?:string, 
		public SVY_TEXT_C?:string, 
		public SVY_TEXT_D?:string, 
		public SVY_TEXT_E?:string, 
		public SVY_TEXT_F?:string, 
		public SVY_TEXT_G?:string, 
		public SVY_TEXT_H?:string, 
		public SVY_TEXT_I?:string, 
		public SVY_TEXT_J?:string, 
		public SVY_MEMO_A?:string, 
		public SVY_MEMO_B?:string, 
		public SVY_MEMO_C?:string, 
		public SVY_MEMO_D?:string, 
		public SVY_DATETIME_A?:Date, 
		public SVY_DATETIME_B?:Date, 
		public SVY_DATETIME_C?:Date, 
		public SVY_DATETIME_D?:Date, 
		public SVY_DATETIME_E?:Date, 
		public SVY_DATETIME_F?:Date, 
		public SVY_INTEGER_A?:number, 
		public SVY_INTEGER_B?:number, 
		public SVY_INTEGER_C?:number, 
		public SVY_INTEGER_D?:number, 
		public SVY_INTEGER_E?:number, 
		public SVY_HDR_ASS_DETAILS?:string, 
		public AB_HDR_ID?:number, 
		public SVY_HDR_PAR_ID?:number, 
		public SVY_HDR_ANOM_CODE?:string, 
		public SVY_HDR_ANOM_COMMENT?:string, 
		public SVY_SINGLE_F?:number, 
		public SVY_SINGLE_G?:number, 
		public SVY_SINGLE_H?:number, 
		public SVY_SINGLE_I?:number, 
		public SVY_SINGLE_J?:number, 
		public SVY_SINGLE_K?:number, 
		public SVY_SINGLE_L?:number, 
		public SVY_SINGLE_A?:number, 
		public SVY_SINGLE_B?:number, 
		public SVY_SINGLE_C?:number, 
		public SVY_SINGLE_D?:number, 
		public SVY_SINGLE_E?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblSurveyHeader{ return super._Table(); }


}




export class TblSurveyPosition extends TableBase {

  public rows:Array<TblSurveyPositionRow> = [];

  public tableFieldPrefix="SVY_POS_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="svypos";

	this.columns.push(new ColumnInfo('SVY_POS_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_DATE_TIME', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_KP', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_DEPTH', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_EASTING', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_NORTHING', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_VID_TAG', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_OFFSET', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_HEADING', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_PITCH', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_ROLL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_ALTITUDE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_TEMPERATURE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_LONGITUDE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_LATITUDE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_XCOORD', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_YCOORD', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_ZCOORD', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_UPDATE_DATE', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('SVY_POS_VIDEO_CTR', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblSurveyPositionRow):TblSurveyPositionRow
  {
    return super.Add(row);
  }

  NewRow():TblSurveyPositionRow{return new TblSurveyPositionRow();}
  GetRows():Array<TblSurveyPositionRow>{return this.rows;}
  public set currentRow(value:TblSurveyPositionRow){super.__currentRow(value);}
  public get currentRow():TblSurveyPositionRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblSurveyPositionRow>{return super.__dirtyRows();}
  public get newRows():Array<TblSurveyPositionRow>{return super.__newRows();}


}

export class TblSurveyPositionRow extends TableRowBase{
	constructor(
		public SVY_POS_ID?:number, 
		public SVY_POS_DATE_TIME?:Date, 
		public SVY_POS_KP?:number, 
		public SVY_POS_DEPTH?:number, 
		public SVY_POS_EASTING?:number, 
		public SVY_POS_NORTHING?:number, 
		public SVY_POS_VID_TAG?:number, 
		public SVY_POS_OFFSET?:number, 
		public SVY_POS_HEADING?:number, 
		public SVY_POS_PITCH?:number, 
		public SVY_POS_ROLL?:number, 
		public SVY_POS_ALTITUDE?:number, 
		public SVY_POS_TEMPERATURE?:number, 
		public SVY_POS_LONGITUDE?:number, 
		public SVY_POS_LATITUDE?:number, 
		public SVY_POS_XCOORD?:number, 
		public SVY_POS_YCOORD?:number, 
		public SVY_POS_ZCOORD?:number, 
		public SVY_POS_UPDATE_DATE?:Date, 
		public SVY_POS_VIDEO_CTR?:number){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblSurveyPosition{ return super._Table(); }


}




export class TblTreeStruc extends TableBase {

  public rows:Array<TblTreeStrucRow> = [];

  public tableFieldPrefix="TRE_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="tre";

	this.columns.push(new ColumnInfo('TRE_NOD_TAG', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_NOD_TAG_PAR', 'number', '', '', -1, -1, 0, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_NOD_LOC', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_NOD_ORDER', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_DAT_TYPE', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_DAT_TAG', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_NOD_SEL', 'number', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_Created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_CreatedBy', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_Updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('TRE_UpdatedBy', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblTreeStrucRow):TblTreeStrucRow
  {
    return super.Add(row);
  }

  NewRow():TblTreeStrucRow{return new TblTreeStrucRow();}
  GetRows():Array<TblTreeStrucRow>{return this.rows;}
  public set currentRow(value:TblTreeStrucRow){super.__currentRow(value);}
  public get currentRow():TblTreeStrucRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblTreeStrucRow>{return super.__dirtyRows();}
  public get newRows():Array<TblTreeStrucRow>{return super.__newRows();}


}

export class TblTreeStrucRow extends TableRowBase{
	constructor(
		public TRE_NOD_TAG?:number, 
		public TRE_NOD_TAG_PAR?:number, 
		public TRE_NOD_LOC?:string, 
		public TRE_NOD_ORDER?:number, 
		public TRE_DAT_TYPE?:number, 
		public TRE_DAT_TAG?:number, 
		public TRE_NOD_SEL?:number, 
		public TRE_Created?:Date, 
		public TRE_CreatedBy?:string, 
		public TRE_Updated?:Date, 
		public TRE_UpdatedBy?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblTreeStruc{ return super._Table(); }


}




export class TblUsers extends TableBase {

  public rows:Array<TblUsersRow> = [];

  public tableFieldPrefix="USER_";
	private _tableLinks:Array<string>=[];
	private _links:Array<any>=[];

  constructor(public http:HttpClient,public apiUrl:string, public tables:Array<any>, public apiCommon:AppCommonMethodsService) {
    super(http, apiUrl,tables,apiCommon);

    this.derivedTable = this;

    this.tableCode="user";

	this.columns.push(new ColumnInfo('USER_ID', 'number', '', '', 0, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_NAME', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_NOTES', 'string', '', '', -1, -1, -1, -1, -1, false, false, true, this));
	this.columns.push(new ColumnInfo('USER_STATUS', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_Created', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_CreatedBy', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_Updated', 'Date', '', '', -1, -1, -1, -1, -1, false, false, false, this));
	this.columns.push(new ColumnInfo('USER_UpdatedBy', 'string', '', '', -1, -1, -1, -1, -1, false, false, false, this));

    this.InitializeTable();

  }

  Add(row?:TblUsersRow):TblUsersRow
  {
    return super.Add(row);
  }

  NewRow():TblUsersRow{return new TblUsersRow();}
  GetRows():Array<TblUsersRow>{return this.rows;}
  public set currentRow(value:TblUsersRow){super.__currentRow(value);}
  public get currentRow():TblUsersRow{return super.__currentRow();}
  public TableLinks():Array<string>{return this._tableLinks;}
  public Links():Array<any>{return this._links;}
  public get dirtyRows():Array<TblUsersRow>{return super.__dirtyRows();}
  public get newRows():Array<TblUsersRow>{return super.__newRows();}


}

export class TblUsersRow extends TableRowBase{
	constructor(
		public USER_ID?:number, 
		public USER_NAME?:string, 
		public USER_NOTES?:string, 
		public USER_STATUS?:string, 
		public USER_Created?:Date, 
		public USER_CreatedBy?:string, 
		public USER_Updated?:Date, 
		public USER_UpdatedBy?:string){
    super();

  }

  // Returs the table object where the row is a member of.
  public get Table():TblUsers{ return super._Table(); }


}
