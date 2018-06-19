import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AbstractProvider} from "../AbstractProvider";
import {Poll} from "../../models/poll";

/*
  Generated class for the PollsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PollsProvider extends AbstractProvider {
    protected url: string = 'http://127.0.0.1:8000';

    constructor(public http: HttpClient) {
    }

    createPoll(poll: Poll) {
        let headers = new HttpHeaders({"Content-Type": "application/json"});

        return this.http.post(this.url + "/polls", poll, {headers: headers});
    }

    getAll() {
        return this.http.get<Poll[]>(this.url + "/polls");
    }

}
