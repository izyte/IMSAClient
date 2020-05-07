import { TblAnomalies, TblAnomaliesRow } from './../../svc/app.tables';
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

    // this.ds.tblAnomalies.GetRowById(2, (data) => {
    //   console.log('Anomaly 2:', this.ds.tblAnomalies.GetRowById(2));
    // });

    // setTimeout(() => {
    //   let row: TblAnomaliesRow = this.ds.tblAnomalies.GetRowById(794);
    //   console.log("LinkedRows:",row.GetLinkedRows("rf"));
    //   //GetLinkedRows

    //   // console.log("Linked RF to Anomaly 1014 records:",
    //   // this.ds.tblAnomalies.tableRelations["rf"].GetLinkedRows(1014));
    //   // console.log("Linked RF to Anomaly 884 records:",
    //   // this.ds.tblAnomalies.tableRelations["rf"].GetLinkedRows(884));
    //   // console.log("Linked RF to Anomaly 794 records:",
    //   // this.ds.tblAnomalies.tableRelations["rf"].GetLinkedRows(794));
    //   // console.log("Linked RF to Anomaly 631 records:",
    //   // this.ds.tblAnomalies.tableRelations["rf"].GetLinkedRows(631));
    //   // console.log("Linked RF to Anomaly 672 records:",
    //   // this.ds.tblAnomalies.tableRelations["rf"].GetLinkedRows(672));
    //   // console.log("Linked RF to Anomaly 671 records:",
    //   // this.ds.tblAnomalies.tableRelations["rf"].GetLinkedRows(671));

    //   //key: '1014,884,794,672,671,631',
    // }, 7000);

    const reqParams: Array<any> = [
      // {
      //   code: '@misc',
      //   subsKey:this.ds.apiCommon.newSubsKey,
      // },
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
        xcode: 'param',
        pageNumber: 3,
        pageSize: 25,
      },
      {
        xcode: 'node',
        pageNumber: 3,
        pageSize: 2000,
      },
      {
        code: 'an',
        key: '1014,884,794,672,671,631',
      },
      {
        xcode: 'ft',
        key: '850,734,841,747',
        keyField: '@an',
      },
      {
        code: 'rf',
        key: '1014,884,794,672,671,631',
        keyField: '@an',
      },
    ];

    this.ds.Get(reqParams, {
      onSuccess: (data) => {
        console.log('First try Data received!');
        console.log('Anomaly 1014:', this.ds.tblAnomalies.GetRowById(1014));
      },
      onError: (error) => {
        console.log('Error:', error);
      },
    });

    setTimeout(() => {
      this.ds.Get([{ code: 'ft' }], {
        onSuccess: (data) => {
          console.log('Second try Data received!');
        },
        onError: (error) => {
          console.log('Error:', error);
        },
      });
    }, 400);

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

    // let subs = this.ds.tblFailureThreats.Get({
    //   onSuccess: (data) => {
    //     console.log(this.ds.tblFailureThreats);
    //   },
    // });

    // setTimeout(()=>{
    //   console.log("pending subscription:",subs);
    // },6000)

    // this.ds.tblLookups.GetRowsByGroup({key:1});

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

  public currentAnomId:number =0;
  AnomClick(anomId:number){
    this.currentAnomId = anomId;
  }

  loadTables(tbls: Array<any>) {}
}
