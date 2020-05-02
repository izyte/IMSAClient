import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppCommonService {

  constructor() { }

  public get TestProperty():string{
    return "Test return!";
  }

}


