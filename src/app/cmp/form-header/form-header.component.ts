import { AppDataset } from './../../svc/app-dataset.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-header',
  templateUrl: './form-header.component.html',
  styleUrls: ['./form-header.component.scss']
})
export class FormHeaderComponent implements OnInit {
  @Input() title:string

  constructor(public ds:AppDataset) { }

  SetButtonTitle(type:string):string{
    return "Sorry. This action is not yet avialable..."
  }

  ngOnInit(): void {
  }

}
