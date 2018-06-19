import {HttpClient} from '@angular/common/http';
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

    constructor(public http: HttpClient) {
    }

    createPoll(poll: Poll) {
        return this.http.post(this.url + "/polls", poll);
    }

}
