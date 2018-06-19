import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {pollAnswer} from "../../models/poll_answer";
import {Survey} from "../../models/survey";
import {AbstractProvider} from "../AbstractProvider";

/*
  Generated class for the SurveysProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SurveysProvider extends AbstractProvider {

    constructor(public http: HttpClient) {
    }
    createSurveyAnswer(survey: Survey, answer: pollAnswer) {
        let body = {
            survey: survey,
            answer: answer,

        };
        let headers = new HttpHeaders({"Content-Type": "application/json"});

        return this.http.post(this.url + "/surveys/answers", body, {headers: headers});

    }

    getSurveys() {
        return this.http.get<Survey[]>(this.url + "/surveys/polls", {})

    }
}
