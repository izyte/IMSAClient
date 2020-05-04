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
        pageNumber:1,
        pageSize:10
      },
      {
        code: 'ft',
        pageNumber:2,
        pageSize:15
      },
      {
        code: 'param',
        pageNumber:3,
        pageSize:25
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
    console.log('DECODED STRING:' + decodedStr,"length: "+encodedStr.length);



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
