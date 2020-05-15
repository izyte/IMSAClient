import { AppDataset } from './../../svc/app-dataset.service';
import { FormCommon } from './../form.common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey-data',
  templateUrl: './survey-data.component.html',
  styleUrls: ['./survey-data.component.scss']
})
export class SurveyDataComponent  extends FormCommon implements OnInit{

  constructor(public ds:AppDataset) {
    super(ds);
  }

  ngOnInit(): void {
  }

}
