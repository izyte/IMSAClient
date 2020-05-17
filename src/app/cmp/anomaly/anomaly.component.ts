import { TreeViewNode } from './../../api/cmp/tree-view/tree-view.component';
import { FormCommon } from './../form.common';
import { AppDataset } from './../../svc/app-dataset.service';
import { Component, OnInit, Input } from '@angular/core';
import { config } from 'rxjs';
import { TblAnomaliesRow } from 'src/app/svc/app.tables';

@Component({
  selector: 'app-anomaly',
  templateUrl: './anomaly.component.html',
  styleUrls: ['./anomaly.component.scss'],
})
export class AnomalyComponent extends FormCommon implements OnInit {
  //@Input() moduleId: number=-2;

  constructor(public ds: AppDataset) {
    super(ds);
    console.log('module data:', this.moduleData);
  }

  ngOnInit(): void {}

  private _mainData: Array<TblAnomaliesRow> = null;
  private _subData: Array<TblAnomaliesRow> = [];
  private _prevAsset: number = -1;

  public get mainData(): Array<TblAnomaliesRow> {
    const treeNode = this.ds.currTreeNode;
    const treeData = this.ds.mainTreeData;
    const rows = this.ds.tblAnomalies.rows;

    if (treeData == null || treeNode == null || rows.length == 0) return [];

    if (this._prevAsset != treeNode.id) {
      this._subData = [];

      console.log('mainData!!!', this._prevAsset, treeNode.id, rows.length);

      // get all assets under the selected location
      const subLocations = treeData.filter((n: TreeViewNode) =>
        n.loc.startsWith(treeNode.loc)
      );
      if (subLocations) {
        // iterate through the selected nodes and filter all anomalies under each location
        subLocations.forEach((r: TreeViewNode) => {
          const anoms = rows.filter(
            (row: TblAnomaliesRow) => row.AN_ASSET_ID == r.did
          );
          anoms.forEach((ar: TblAnomaliesRow) => this._subData.push(ar));
        });
      }
      this._prevAsset = treeNode.id;
    }
    return this._subData;
  }

  public UpdateData() {
    if (this._mainData == null) {
      // get all anomaly records if retrieval has not been made yet
      this.ds.Get([{ code: 'an' }], {
        onSuccess: (data) => {
          console.log(data);
          this._mainData = this.ds.tblAnomalies.rows;
        },
        onError: (err) => {
          console.log(err);
        },
      });
    }
  }
}
