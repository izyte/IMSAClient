import { AppDataset } from './../../svc/app-dataset.service';
import { FormCommon } from './../form.common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freespan',
  templateUrl: './freespan.component.html',
  styleUrls: ['./freespan.component.scss']
})
export class FreespanComponent  extends FormCommon implements OnInit{

  constructor(public ds:AppDataset) {
    super(ds);
  }

  ngOnInit(): void {
  }

}
