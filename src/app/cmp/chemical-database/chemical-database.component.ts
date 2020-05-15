import { FormCommon } from './../form.common';
import { AppDataset } from './../../svc/app-dataset.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chemical-database',
  templateUrl: './chemical-database.component.html',
  styleUrls: ['./chemical-database.component.scss']
})
export class ChemicalDatabaseComponent  extends FormCommon implements OnInit{

  constructor(public ds:AppDataset) {
    super(ds);
  }
  ngOnInit(): void {
  }

}
