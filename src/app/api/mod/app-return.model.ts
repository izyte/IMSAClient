export interface AppReturn {
  returnDescription: string;
  requestDateTime: Date;
  recordsFormat: string;
  recordCount: number;
  records: Array<any>;
  recordsList: Array<Array<object>>;
  returnStrings: Array<string>;
  props: object;
}
