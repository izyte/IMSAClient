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

  ngOnInit(): void {
  }

}
