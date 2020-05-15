import { FormCommon } from './../form.common';
import { AppDataset } from './../../svc/app-dataset.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seismic',
  templateUrl: './seismic.component.html',
  styleUrls: ['./seismic.component.scss']
})
export class SeismicComponent  extends FormCommon implements OnInit{

  constructor(public ds:AppDataset) {
    super(ds);
  }

  ngOnInit(): void {
  }

}
