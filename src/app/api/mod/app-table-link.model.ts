/*export class TableLink{
    constructor(
        public childTable:any,
        public childGroup:string,
        public caption?:string,
        public alias?:string,
        public isParameter?:boolean
    ){
        if(this.type==undefined) this.type="string";
        if(this.caption==undefined) this.caption="";
        if(this.alias==undefined) this.alias="";
        if(this.isParameter==undefined) this.isParameter=true;
    }
}*/

export class TableLinkCollection {
  constructor(public childTable: any, public parentTable: any) {}

  private _Links: Array<TableLinkRecord> = null;
  public get Links(): Array<TableLinkRecord> {
    if (!this._Links) {
      // get records from the server
      // http://<domain>/api/app/<parent table code>/+/<child table code>
      // /+/ means get all link records from the repository
      // /[parentId]/ means get records under the given parentId
      // /[parentId1],[parentId2],[...],[parentId#]/ means get records
      // under the given comman delimited parentId's
      this._Links=[];
      this._Links.push(new TableLinkRecord(1,1));
    }

    return this._Links || [];
  }
}

export class TableLinkRecord {
  constructor(public parentId: number,public childId: number) {}
}
