import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {PollAnswer} from "../../models/poll_answer";
import {Survey} from "../../models/survey";
import {AbstractProvider} from "../AbstractProvider";
import {User} from "../../models/user";

/*
  Generated class for the SurveysProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SurveysProvider extends AbstractProvider {
    protected url: string = 'http://127.0.0.1:8000';

    constructor(public http: HttpClient) {
        super();
    }
    createSurveyAnswer(survey: Survey, answer: PollAnswer, user : User) {
        let body = {
            survey: survey,
            answer: answer,
            user : user

        };
        let headers = new HttpHeaders({"Content-Type": "application/json"});

        return this.http.post(this.url + "/surveys/answers", body, {headers: headers});

    }

    getSurveys() {
        return this.http.get<Survey[]>(this.url + "/surveys/polls", {})

    }

    getSurvey(user : User){
        return this.http.get(this.url+"/surveys/polls/"+user.id);
    }
}
