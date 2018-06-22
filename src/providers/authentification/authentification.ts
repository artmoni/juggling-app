import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {User} from "../../models/user";
import {AbstractProvider} from "../AbstractProvider";

/*
  Generated class for the AuthentificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthentificationProvider extends AbstractProvider {


    constructor(public http: HttpClient) {
        super();
    }

    login(user: User) {
        let body = {
            user: user
        };
        let headers = new HttpHeaders({"Content-Type": "application/json"});

        return this.http.post(this.url + "/users/login", body, {headers: headers});
    }

    signIn(user: User) {
        let body = {
            user: user
        };
        let headers = new HttpHeaders({"Content-Type": "application/json"});

        return this.http.post(this.url + "/users/signin", body, {headers: headers});
    }
}
