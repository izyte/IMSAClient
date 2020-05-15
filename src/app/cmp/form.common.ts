import { AppDataset } from './../svc/app-dataset.service';
import { Input } from '@angular/core';

export class FormCommon {
  constructor(public ds: AppDataset) {}

  @Input() public moduleId: number = -1;

  private _moduleTitle: string = '';
  private _moduleItem: any = null;
  //public moduleTitle:string="hello module!"
  public get moduleTitle() {
    if (this._moduleTitle == '') {
      const menuList = this.ds.menuList;

      menuList.forEach((m) => {
        if (m.subMenu) {
          //console.log("menu:",m);
          const menuItem = m.subMenu.find((sm) => sm.id == this.moduleId);
          if (menuItem) this._moduleTitle = menuItem.label;
        }
      });
    }
    return this._moduleTitle;
  }
}
