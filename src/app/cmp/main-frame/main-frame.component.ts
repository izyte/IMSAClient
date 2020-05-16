import { SurveyUploadComponent } from './../survey-upload/survey-upload.component';
import { TblTreeStrucRow, TblNodesAttribRow } from './../../svc/app.tables';
import { TreeViewComponent } from './../../api/cmp/tree-view/tree-view.component';
import { AppDataset } from './../../svc/app-dataset.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.scss'],
})
export class MainFrameComponent implements OnInit, AfterViewInit {
  constructor(public ds: AppDataset) {}

  @ViewChild('mainTree', { static: false }) treeView: TreeViewComponent;

  // property declarations
  public panelSwitch: any = {
    tree: true,
    info: true,
  };
  public treePanelWidth: number = -1;
  public infoPanelWidth: number = -1;

  ngOnInit(): void {
    this.InitComponent();
  }

  ngAfterViewInit() {
    //console.log("treeView",this.treeView,this.treeView.treeData);
  }

  GetModuleData() {
    // Request data based on selected module....
  }



  public menuList:Array<any> = this.ds.menuList;

  private get activeMenu(): any {
    return this.menuList.find((e) => e.active);
  }

  public menuClick(menuId: number) {
    const menu: any = this.activeMenu;
    let changeMenu: boolean = false;

    if (menu) {
      if (menu.id != menuId) {
        menu.active = false;
        changeMenu = true;
      }
    } else {
      changeMenu = true;
    }
    if (changeMenu) this.menuList.find((e) => e.id == menuId).active = true;

    const subm = this.subMenu;
    if (subm.length) {
      if (!subm.find((e) => e.active)) subm[0].active = true;
    }
  }

  public subMenuClick(menuId: number) {
    const subm = this.subMenu;
    const activeMenu: any = subm.find((e) => e.active);
    let changeMenu: boolean = false;
    if (activeMenu) {
      if (activeMenu != menuId) {
        activeMenu.active = false;
        changeMenu = true;
      }
    } else {
      changeMenu = true;
    }
    if (changeMenu) subm.find((e) => e.id == menuId).active = true;
  }

  public get activeModule() {
    const menu = this.menuList.find((m) => m.active);
    if (!menu == null) return -1;

    const subMenu = menu.subMenu.find((sm) => sm.active);
    if (subMenu == null) return -1;
    return subMenu.id;
  }

  public get subMenu(): Array<any> {
    const menu = this.activeMenu;
    if (!menu) return [];
    if (!menu.subMenu) return [];
    return menu.subMenu;
  }

  public currentParent: string = '4667';

  InitComponent(): void {
    this.GetInitialTreeData();
  }

  //private _InitialNodesLocations: string = '$$,$$__,$$____,$$______,$$________,$$__________,$$____________,$$______________';
  private _InitialNodesLocations: string = '$$,$$__,$$____,$$______,$$________,$$__________';
  //private _InitialNodesLocations: string = '$$,$$__,$$____,$$______';
  //private _InitialNodesLocations: string = '$$,$$__';
  //private _InitialNodesLocations: string = '$$%';
  private _ExtractNodeFields: string = 'REC_TAG`NODE_ID`NODE_DESC';
  private _ExtracTreeFields: string =
    'TRE_NOD_TAG`TRE_NOD_TAG_PAR`TRE_NOD_LOC`TRE_DAT_TAG';

  LoadChildrenTreeData(parentNode: any) {
    // set loading flag to true
    parentNode.isChildNodesLoading = true;
    const parentId = parentNode.id;

    // search parent node record from this.ds.tblTreeStruc
    let row: TblTreeStrucRow = this.ds.tblTreeStruc.GetRowById(parentId);
    const par = row.TRE_NOD_LOC
    let location:string =par + '__,' + par + '____,'+ par + '______,'+ par + '________,'+ par + '__________,'+ par + '____________';
    console.log("Location:",location);

    this.ds.Get(
      [
        {
          code: 'tre',
          key: location,
          keyField: 'TRE_NOD_LOC',
          includedFields: this._ExtracTreeFields,
          requestConfig: 'count=tre,first=tre',
        },
        {
          code: 'node',
          key: location,
          includedFields: this._ExtractNodeFields,
          keyField: '@tre|TRE_NOD_LOC',
        },
      ],
      {
        onSuccess: (e) => {
          console.log('Processed Rows:', e);
          // turn off loading flag
          parentNode.isChildNodesLoading = false;

          // add nodes to this.ds.mainTreeData
          const mainTreeData = this.ds.mainTreeData;
          const treRows = e.rows[0];
          const nodeRows = e.rows[1];

          treRows.forEach((r: TblTreeStrucRow) => {
            // check if row is not yet in the treeData
            if (!mainTreeData.find((e) => e.id == r.TRE_NOD_TAG)) {
              // if not yet in the tree table, add record
              // find record in nodeAttrib table
              let node:TblNodesAttribRow = this.ds.tblNodesAttrib.GetRowById(r.TRE_DAT_TAG);

              // create tree node data
              let treeNode: any = {};

              treeNode.id = r.TRE_NOD_TAG;
              treeNode.text = node ? node.NODE_DESC : 'Node ' + treeNode.id;
              treeNode.pid = r.TRE_NOD_TAG_PAR;
              treeNode.ccnt = r.childCount;
              treeNode.exp = false;

              // add tree node data
              this.ds.mainTreeData.push(treeNode);
            }
          });

          parentNode.exp = true;
          this.treeView.ProcessTree();
        },
        onError: (e) => console.log(e),
      }
    );
  }

  GetInitialTreeData() {

    this.ds.clearError();
    this.treeLoadingReset();

    this.ds.Get(
      [
        {
          code: 'tre',
          //key: this.currentParent,
          key: this._InitialNodesLocations,
          keyField: 'TRE_NOD_LOC',
          includedFields: this._ExtracTreeFields,
          requestConfig: 'count=tre,first=tre',
        },
        //{ code: 'node', key: '0', keyField: '@tre|1' },
        {
          code: 'node',
          key: this._InitialNodesLocations,
          includedFields: this._ExtractNodeFields,
          keyField: '@tre|TRE_NOD_LOC',
        },
      ],
      {
        onSuccess: (args) => {
          let st: Date = new Date();
          console.log(
            'ROWS:',
            this.ds.tblTreeStruc.rows.length,
            this.ds.tblTreeStruc,
            'start:',
            st,
            'args',
            args
          );

          // initialize tree data source
          this.ds.mainTreeData = [];

          // DO NOT PUT ANY REFERENCE TO this.treeView INSIDE THE
          // this.ds.tblTreeStruc.rows.forEach LOOP this will
          // RUIN THE AUTO REFRESH OF THE BROWSER !!!!!
          const expArr = [this.treeView.rootId];

          // iterate through all rows in the tblTreeStruc table
          this.ds.tblTreeStruc.rows.forEach((r) => {
            const node = this.ds.tblNodesAttrib.GetRowById(r.TRE_DAT_TAG);
            //const expArr = [this.treeView.rootId, 2830,3745,4877];

            // create tree node data
            let treeNode: any = {};

            treeNode.id = r.TRE_NOD_TAG;
            treeNode.text = node ? node.NODE_DESC : 'Node ' + treeNode.id;
            treeNode.pid = r.TRE_NOD_TAG_PAR;
            treeNode.ccnt = r.childCount;
            treeNode.exp = expArr.indexOf(r.TRE_NOD_TAG) != -1;
            //treeNode.sta = 'ora';

            // add tree node data
            this.ds.mainTreeData.push(treeNode);
          });

          setTimeout(() => {
            // refresh tree
            // need to use setTimeout method for the treeView.ProcessTree() method to work properly!
            this.treeView.ProcessTree();
          }, 100);

          console.log(
            'Time Elapsed:',
            this.ds.getDateMilliseconds(st, new Date())
          );
          // end of onSuccess
        },
        onError: (err) => {
          // process error result
          this.ds.errorObject = err;
        },
      }
    );
  }

  TreeClick(n: any) {
    this.ds.mainTreeCurrentNode = n;
    this._NodePath = this.treeView.NodePath;
  }
  TreePMClick(e: any) {
    if (e.options.childNodesMissing) {
      let node = e.node;
      this.LoadChildrenTreeData(e.node);
      //
    } else {
    }
    //console.log('PM Clicked', e);
  }

  SeparatorClick(item: string) {
    this.panelSwitch[item] = !this.panelSwitch[item];
  }

  private _treeLoadingMessage="Loading tree. Please wait...";
  private treeLoadingReset(){
    this._treeLoadingMessage="Loading tree. Please wait...";
  }
  public get treeLoadingMessage():string{
    if(this.ds.errorObject.type != ''){
      const err = this.ds.errorObject;
      this._treeLoadingMessage = err.type + ", " +  err.message.split('?')[0];
    }else{
      this.treeLoadingReset();
    }
    return this._treeLoadingMessage;
  }

  _NodePath: string = '-';
  get NodePath(): string {
    //if (!this.treeView) return this._NodePath;
    // using setTimeout suppresses the ExpressionChangedAfterItHasBeenCheckedError

    // USING THE METHOD ON THE NEXT LINE WILL SIGNIFICANTLY SLOW DOWN
    // THE SYSTEM!!!!
    //setTimeout(()=>{this._NodePath = this.treeView.NodePath;},0);

    return this._NodePath;
  }
}
