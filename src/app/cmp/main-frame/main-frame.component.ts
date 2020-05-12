import { AppDataset } from './../../svc/app-dataset.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-frame',
  templateUrl: './main-frame.component.html',
  styleUrls: ['./main-frame.component.scss'],
})
export class MainFrameComponent implements OnInit {
  constructor(public ds: AppDataset) {}

  ngOnInit(): void {
    this.InitComponent();
  }

  public menuList:Array<any> = [
    {id:1, label:"Modules",active:true, subMenu:[
      {id:1, label:"Anomaly",active:true},
      {id:2, label:"Design Data",active:false},
      {id:3, label:"Chemical Database",active:false},
      {id:4, label:"Risk Based Inspection",active:false},
      {id:5, label:"Survey Data",active:false},
      {id:6, label:"Freespan",active:false},
      {id:7, label:"Reference Library",active:false},
      {id:8, label:"Seismic",active:false}
    ]},
    {id:2, label:"Tools",active:false},
    {id:3, label:"Help",active:false},
    {id:4, label:"Hi User Name [id]",active:false},
  ]

  private get activeMenu():any{
    return this.menuList.find(e=>e.active);
  }

  public menuClick(menuId:number){
    const menu:any = this.activeMenu;
    let changeMenu:boolean=false;

    if(menu){
      if(menu.id != menuId){
        menu.active = false;
        changeMenu=true;
      }
    }else{
      changeMenu=true;
    }
    if(changeMenu) this.menuList.find(e=>e.id==menuId).active=true;

    const subm = this.subMenu;
    if(subm.length){
      if(!subm.find(e=>e.active)) subm[0].active=true;
    }
  }

  public subMenuClick(menuId:number){
    const subm = this.subMenu;
    const activeMenu:any = subm.find(e=>e.active);
    let changeMenu:boolean = false;
    if(activeMenu){
      if(activeMenu!=menuId){
        activeMenu.active=false;
        changeMenu=true;
      }
    }else{
      changeMenu=true;
    }
    if(changeMenu) subm.find(e=>e.id==menuId).active=true;
  }

  public get subMenu():Array<any>{
    const menu = this.activeMenu;
    if(!menu) return [];
    if(!menu.subMenu) return  [];
    return menu.subMenu;
  }

  public currentParent:string = "4667"

  InitComponent(): void {

    this.ds.Get(
      [
        {
          code: 'tre',
          key: this.currentParent,
        },
        { code: 'node', key: '0', keyField: '@tre|1' },
      ],
      {
        onSuccess: (data) => {
          this.ds.Get([
            {
              code: 'tre',
              key: this.currentParent,
              keyField: '1',
              requestConfig:'count=tre,first=tre',
            },
            { code: 'node', key: this.currentParent, keyField: '@tre|1' },
          ], {onSuccess:(retData)=>{
            const tbl = this.ds.tblTreeStruc;
            const row = tbl.rows[0];
            console.log("CHILD COUNT:",row.childCount,tbl);
            //console.log("ROW",row,tbl.ParentDetailRelation,"relend");
            //console.log("Dataset", this.ds,row.childCount,row.childFirst);


          }});
        },
        onError: (err) => {
          console.log(err);
        },
      }
    );
  }
}
