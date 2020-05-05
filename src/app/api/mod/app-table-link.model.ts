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
  // Modified: May 5, 2020
  constructor() {}

  private _Links: Array<TableLinkObject> = [];
  public get Links(): Array<TableLinkObject> {
    return this._Links;
  }

  public Add(tableLinkObject: TableLinkObject) {
    if (!this._Links) this._Links = [];
    this._Links.push(tableLinkObject);
  }

  public GetLinkObject(childCode: string): TableLinkObject {
    return this._Links.find((L) => {
      return L.childCode == childCode;
    });
  }

  public GetLinkRows(childCode: string): Array<TableLinkRecord> {
    const linkObject = this.GetLinkObject(childCode);
    if (!linkObject) return null;
    return linkObject.rows;
  }
}

export class TableLinkObject {
  constructor(public childCode: string, public rows: Array<TableLinkRecord>) {}
}
export class TableLinkRecord {
  constructor(public parentId: number, public childId: number) {}
}
