import { AppDataset } from './../../svc/app-dataset.service';
import { FormCommon } from './../form.common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent extends FormCommon implements OnInit{

  constructor(public ds:AppDataset) {
    super(ds);
  }
  ngOnInit(): void {
  }

}
