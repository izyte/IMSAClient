import { AppDataset } from './../../svc/app-dataset.service';
import { FormCommon } from './../form.common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-library',
  templateUrl: './reference-library.component.html',
  styleUrls: ['./reference-library.component.scss']
})
export class ReferenceLibraryComponent  extends FormCommon implements OnInit{

  constructor(public ds:AppDataset) {
    super(ds);
  }

  ngOnInit(): void {
  }

}
