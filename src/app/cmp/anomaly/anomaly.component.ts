import { AppDataset } from './../../svc/app-dataset.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anomaly',
  templateUrl: './anomaly.component.html',
  styleUrls: ['./anomaly.component.scss']
})
export class AnomalyComponent implements OnInit {

  constructor(public ds:AppDataset) { }

  ngOnInit(): void {
  }

}
