import { Relation } from './../../api/svc/app-common.datatable';
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

    //this.ds.tblAnomalies.tableRelations["an"]=new Relation("lnk",this.ds.tblAnomalies,this.ds.tblFailureThreats);
    //console.log(this.ds.tblAnomalies.tableRelations);
    console.log(this.ds.tblAnomalies.tableRelations["ft"]);
    console.log(this.ds.tblAnomalies.tableRelations["rf"]);

    // this.ds.tblFailureThreats.Get({
    //   onSuccess: (data) => {
    //     console.log(this.ds.tblFailureThreats);
    //   },
    // });

    // return;

    // const json = [
    //   {
    //     code: 'user',
    //     pageNumber: 1,
    //     pageSize: 10,
    //   },
    //   {
    //     code: 'ft',
    //     pageNumber: 2,
    //     pageSize: 15,
    //   },
    //   {
    //     code: 'param',
    //     pageNumber: 3,
    //     pageSize:25,
    //   },
    // ];

    //const str = 'JavaScript is fun!!';
    //const str = JSON.stringify(json);

    // encode the string
    //const encodedStr = btoa(str);

    // print encoded string
    //console.log('ENCODED STRING:' + encodedStr);

    // encode the string
    //const decodedStr = atob(encodedStr);
    //console.log('DECODED STRING:' + decodedStr, 'length: ' + encodedStr.length);

    const reqParams: Array<any> = [
      {
        code: 'user',
        pageNumber: 1,
        pageSize: 35,
      },
      // {
      //   code: 'ft',
      //   pageNumber: 2,
      //   pageSize: 10,
      // },
      // {
      //   code: 'ft',
      //   pageNumber: 2,
      //   pageSize: 10,
      // },
      // {
      //   code: 'ft',
      //   pageNumber: 4,
      //   pageSize: 10,
      // },
      {
        code: 'an',
        pageNumber: 1,
        pageSize: 15,
      },
      {
        code: 'param',
        pageNumber: 3,
        pageSize: 25,
      },
      {
        code: 'node',
        pageNumber: 3,
        pageSize: 2000,
      },
      {
        code: 'ft',
        key:"850,734,841,747",
        keyField:"@an"
      },
      {
        code: 'rf',
        key:"1014,884,794,672,671,631",
        keyField:"@an"
      },
    ];

    this.ds.Get(reqParams, {
      onSuccess: (data) => {
        console.log("Data:",data);
        console.log('First try Data received!');
      },
      onError: (error) => {
        console.log('Error:', error);
      },
    });

    // let subParam: any = reqParams.find((e) => {
    //   return e.code == 'an';
    // });

    // if (subParam) {
    //   subParam.pageSize = 20;
    //   subParam.pageNumber = 2;
    // }

    // subParam = reqParams.find((e) => {
    //   return e.code == 'ft';
    // });
    // if (subParam) {
    //   subParam.pageSize = 62;
    //   subParam.pageNumber = 1;
    // } else {
    //   reqParams.push({ code: 'ft', pageSize: 62, pageNumber: 1 });
    // }

    // setTimeout(() => {
    //   this.ds.Get(reqParams, {
    //     onSuccess: (data) => {
    //       //console.log(data);
    //       console.log('Second try Data received!');
    //     },
    //     onError: (error) => {
    //       console.log('Error:', error);
    //     },
    //   });
    // }, 10);
    // this.ds.tblNodesAttrib.Get({
    //   onSuccess: (data) => {
    //     //this.ds.tblNodesAttrib.apiCommon.
    //     console.log(this.ds.tblNodesAttrib);

    //     // this.ds.tblFailureThreats.Get({
    //     //   onSuccess: (data) => {
    //     //     console.log(this.ds.tblFailureThreats);
    //     //   },
    //     // });
    //   },
    // });

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
