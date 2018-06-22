import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AbstractProvider} from "../AbstractProvider";
import {User} from "../../models/user";

/*
  Generated class for the TabsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TabsProvider extends AbstractProvider{
user : User;
name : string = "sheshire";
  constructor(public http: HttpClient) {
    super();
  }

  createUser(){
    return this.http.get(this.url+"/users/"+this.name);
  }

}
