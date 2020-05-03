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
    // this.ds.tblFailureThreats.Get({
    //   onSuccess: (data) => {
    //     console.log(this.ds.tblFailureThreats);
    //   },
    // });

    // return;

    const json = [
      {
        code: 'user',
        sort: '2,3',
        filter: "an_ref='2020-01' And an_type=8080",
      },
      {
        code: 'ft',
        includedFields: '0`1`2',
        sort: '3',
        filter: 'rf_type=8200',
      },
      {
        code: 'param',
        includedFields: '0`1',
        sort: '3',
        filter: 'rf_type=8200',
      },
    ];

    //const str = 'JavaScript is fun!!';
    const str = JSON.stringify(json);

    // encode the string
    const encodedStr = btoa(str);

    // print encoded string
    console.log('ENCODED STRING:' + encodedStr);

    // encode the string
    const decodedStr = atob(encodedStr);
    console.log('DECODED STRING:' + decodedStr);

    this.ds.Get({
      onSuccess: (data) => {
        console.log(data);
      },
    });

    this.ds.tblNodesAttrib.Get({
      onSuccess: (data) => {
        //this.ds.tblNodesAttrib.apiCommon.
        console.log(this.ds.tblNodesAttrib);

        // this.ds.tblFailureThreats.Get({
        //   onSuccess: (data) => {
        //     console.log(this.ds.tblFailureThreats);
        //   },
        // });
      },
    });

    return;

    this.ds.tblUsers.Get({
      onSuccess: (data) => {
        console.log(this.ds.tblUsers);
        this.ds.tblAnomalies.Get({
          onSuccess: (data) => {
            console.log(this.ds.tblAnomalies);

            this.ds.tblLookups.Get({
              onSuccess: (data) => {
                console.log(this.ds.tblLookups);

                this.ds.tblRefFiles.Get({
                  onSuccess: (data) => {
                    console.log(this.ds.tblRefFiles);

                    this.ds.tblNodesAttrib.Get({
                      onSuccess: (data) => {
                        console.log(this.ds.tblNodesAttrib);
                        console.log(
                          'this.ds.tblFailureThreats',
                          this.ds.tblFailureThreats
                        );

                        // this.ds.tblFailureThreats.Get({
                        //   onSuccess: (data) => {
                        //     console.log(this.ds.tblFailureThreats);
                        //   },
                        // });
                      },
                    });
                  },
                });
              },
            });
          },
        });
      },
    });
  }

  loadTables(tbls: Array<any>) {}
}
