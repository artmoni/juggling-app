import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpHeaders} from "@angular/common/http";
import {PollAnswer} from "../../models/poll_answer";
import {Survey} from "../../models/survey";
import {SurveysProvider} from "../../providers/surveys/surveys";
import {serialize} from "serializer.ts/Serializer";
import {Storage} from "@ionic/storage";



/**
 * Generated class for the PollPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-poll',
    templateUrl: 'poll.html',
})
export class PollPage {

    constructor(private storage : Storage ,public navCtrl: NavController, public navParams: NavParams,  private surveyProvider: SurveysProvider) {
    }

    // poll: Poll;

    survey: Survey;
    surveylist: Survey[];
    // surveyPage: SurveysPage = new SurveysPage(this.navCtrl, this.navParams, this.http);
    // surveyProvider: SurveysProvider = new SurveysProvider(this.http);

    ionViewDidLoad() {
        console.log('ionViewDidLoad PollPage');


    }

    create() {
        let question = 'Ceci est une question';
        let url = 'http://127.0.0.1:8000/polls';

        let headers = new HttpHeaders({"Content-Type": "application/json"});
        // headers.set("Accept", "application/json");
        // headers.set("Content-Type", "application/json");
        //
        //
        // headers.append('Access-Control-Allow-Origin' , '*');
        // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

        let body = {
            question: "Question numero 1"
        };
        // this.http.post(url, body, {headers: headers})
        //     .subscribe(data => {
        //         this.poll.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
        //     }, error => {
        //         console.log("Oups!");
        //     });
    }

    showPoll() {

        // let $id = 1;
        // let url = 'http://127.0.0.1:8000/surveys/polls/'+$id;
        // this.http.get<Survey>(url, {})
        //     .subscribe(survey => {
        //             this.survey = survey;
        //             console.log(this.survey.poll);
        //         },
        //         error1 => {
        //             console.log("No question");
        //         })

    }

    selectAnswer(answer: PollAnswer) {
        this.storage.get("user").then( user => {
            this.surveyProvider.createSurveyAnswer(this.survey, answer,serialize(user));
        },error =>{
            console.log("error")
        });
    }

}
