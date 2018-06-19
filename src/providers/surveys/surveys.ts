import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {pollAnswer} from "../../models/poll_answer";
import {Survey} from "../../models/survey";

/*
  Generated class for the SurveysProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SurveysProvider {
    url: string = 'http://127.0.0.1:8000';

    constructor(public http: HttpClient) {
        console.log('Hello SurveysProvider Provider');
    }

    createSurveyAnswer(survey:Survey, answer: pollAnswer) {
        let body = {
            survey: survey,
            answer: answer,

        };
        let headers = new HttpHeaders({"Content-Type": "application/json"});

        return this.http.post(this.url+"/surveys/answers", body, {headers: headers});

    }
    getSurveys(){
        let url = 'http://127.0.0.1:8000/surveys/polls';
        return this.http.get<Survey[]>(url, {})

    }
}