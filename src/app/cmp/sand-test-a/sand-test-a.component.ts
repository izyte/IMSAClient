import { AppDataset } from './../../svc/app-dataset.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sand-test-a',
  templateUrl: './sand-test-a.component.html',
  styleUrls: ['./sand-test-a.component.scss'],
})
export class SandTestAComponent implements OnInit {
  constructor(public ds: AppDataset) {}

  ngOnInit(): void {


    this.ds.tblUsers.Get({
      onSuccess: (data) => {
        console.log(this.ds.tblUsers);
        this.ds.tblAnomalies.Get({
          onSuccess: (data) => {
            console.log(this.ds.tblAnomalies);
            this.ds.tblRefFiles.Get({
              onSuccess: (data) => {
                console.log(this.ds.tblRefFiles);
                this.ds.tblLookups.Get({
                  onSuccess: (data) => {
                    console.log(this.ds.tblLookups);
                  },
                });
              },
            });

            /*this.ds.tblRefFiles.GetRowsByGroup({
              key: 8205,
              onSuccess: (data) => {
                console.log(this.ds.tblRefFiles);
              },
            });*/

            /*
            this.ds.tblRefFiles.GetRowsByGroup({
              key: 8204,
              onSuccess: (data) => {
                console.log(this.ds.tblRefFiles);
                this.ds.tblRefFiles.GetRowsByGroup({
                  key: 8207,
                  onSuccess: (data) => {
                    console.log(this.ds.tblRefFiles);
                  },
                });

              },
            });

*/
          },
        });
      },
    });
  }
}
