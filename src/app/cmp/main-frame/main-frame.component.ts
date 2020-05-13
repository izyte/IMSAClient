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

  @ViewChild(TreeViewComponent) treeView: TreeViewComponent;

  ngOnInit(): void {
    this.InitComponent();
  }

  ngAfterViewInit() {
    //console.log("treeView",this.treeView,this.treeView.treeData);
  }

  public menuList: Array<any> = [
    {
      id: 1,
      label: 'Modules',
      active: true,
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
    { id: 2, label: 'Tools', active: false },
    { id: 3, label: 'Help', active: false },
    { id: 4, label: 'Hi User Name [id]', active: false },
  ];

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

  public get subMenu(): Array<any> {
    const menu = this.activeMenu;
    if (!menu) return [];
    if (!menu.subMenu) return [];
    return menu.subMenu;
  }

  public currentParent: string = '4667';

  InitComponent(): void {
    this.ds.Get(
      [
        {
          code: 'tre',
          //key: this.currentParent,
          key: '1',
          keyField: 'TRE_DAT_TYPE',
        },
        //{ code: 'node', key: '0', keyField: '@tre|1' },
        { code: 'node', key: '1', keyField: '@tre|TRE_DAT_TYPE' },
        //http://soga-alv/NgArbi/api/app/node/1/@tre|TRE_DAT_TYPE
      ],
      {
        onSuccess: (data) => {
          let st: Date = new Date();
          console.log('ROWS:', this.ds.tblTreeStruc.rows.length, 'start:', st);
          this.ds.mainTreeData = [];
          //{id:1,pid:0,text:"Level 1 Node 1",exp:true},
          this.ds.tblTreeStruc.rows.forEach((r) => {
            //const node = this.ds.tblNodesAttrib.rows.find(n=>n.REC_TAG==r.TRE_DAT_TAG);
            const node = this.ds.tblNodesAttrib.GetRowById(r.TRE_DAT_TAG);
            const expArr = [this.treeView.rootId, 2830,3745,4877];
            this.ds.mainTreeData.push({
              id: r.TRE_NOD_TAG,
              text: node.NODE_DESC,
              pid: r.TRE_NOD_TAG_PAR,
              ccnt: r.childCount,
              exp: expArr.indexOf(r.TRE_NOD_TAG) != -1,
            });
          });

          setTimeout(() => {
            // need to use setTimeout method for the treeView.ProcessTree() method to work properly!
            this.treeView.ProcessTree();
          }, 1);

          console.log(
            'Time Elapsed:',
            this.ds.getDateMilliseconds(st, new Date())
          );

          //let treeData:Array<any> = JSON.parse(JSON.stringify(this.ds.tblTreeStruc.rows));
          console.log(
            'NEW TREE DATA:',
            this.ds.mainTreeData.length,
            this.ds.mainTreeData
          );

          return;
          this.ds.Get(
            [
              {
                code: 'tre',
                key: this.currentParent,
                keyField: '1',
                requestConfig: 'count=tre,first=tre',
              },
              { code: 'node', key: this.currentParent, keyField: '@tre|1' },
            ],
            {
              onSuccess: (retData) => {
                const tbl = this.ds.tblTreeStruc;
                const row = tbl.rows[0];
                console.log('CHILD COUNT:', row.childCount, tbl);
                //console.log("ROW",row,tbl.ParentDetailRelation,"relend");
                //console.log("Dataset", this.ds,row.childCount,row.childFirst);
              },
            }
          );
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  }
}
