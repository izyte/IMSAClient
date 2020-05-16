import { FormCommon } from './../form.common';
import { AppDataset } from './../../svc/app-dataset.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-anomaly',
  templateUrl: './anomaly.component.html',
  styleUrls: ['./anomaly.component.scss'],
})
export class AnomalyComponent extends FormCommon implements OnInit {
  //@Input() moduleId: number=-2;

  constructor(public ds: AppDataset) {
    super(ds);
  }

  ngOnInit(): void {
    this.ds.Get([{ code: 'an' }], {
      onSuccess: (data) => {
        console.log(data);
      },
      onError: (err) => {
        console.log(err);
      },
    });
  }
}
