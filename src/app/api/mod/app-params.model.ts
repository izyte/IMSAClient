export class RequestParams{
  /***** Server side routeTemplate *******
   *
   * api/{controller}/{table}/{key}/{keyField}/{includedFields}/{filterExpression}/{sortFields}/{pageNumber}/{pageSize}",
   * {controller} = app
   * {table} = code
   * {key} = key (back-tick delimited)
   * {keyField} = keyField (back-tick delimited)
   * {includedFields} = includedFields (back-tick delimited)
   *
   * ??? thinking of removing if the key/keyField construction will suffice
   * as filter expression
   * {filterExpression} = filterExpression
   *
   * {sortFields} = sortFields  (back-tick delimited)
   * ??? thinking of accommodating multi-page parameter
   * i.e. p1,p2,p3   ps-pe  p1,p2,p3,p4-p#
   * {pageNumber} = pageNumber
   * {pageSize} = pageSize
  *****************************************/
  code:string;
  key?:string;
  keyField?:string;
  includedFields?:string;
  filterExpression?:string;
  sortFields?:string;
  pageNumber?:number;
  pageSize?:number;
// jArgs.Add("code", table);
// jArgs.Add("key", (key == "-" ? "" : key));
// jArgs.Add("keyField", (keyField == "-" ? "" : keyField));
// jArgs.Add("includedFields", (includedFields == "-" ? "" : includedFields));
// jArgs.Add("filterExpression", (filterExpression == "-" ? "" : filterExpression));
// jArgs.Add("sortFields", (sortFields == "-" ? "" : sortFields));
// jArgs.Add("pageNumber", (!pageNumber.All(char.IsDigit) ? 0 : Convert.ToInt64(pageNumber)));
// jArgs.Add("pageSize", (!pageSize.All(char.IsDigit) ? 0 : Convert.ToInt64(pageSize)));


}
