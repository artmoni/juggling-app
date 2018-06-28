import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Survey} from "../../models/survey";
import {PollAnswer} from "../../models/poll_answer";
import {SurveysProvider} from "../../providers/surveys/surveys";
import {Storage} from "@ionic/storage";
import {serialize} from "serializer.ts/Serializer";


/**
 * Generated class for the SurveyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-survey',
    templateUrl: 'survey.html',
})
export class SurveyPage {

    survey: Survey;

    constructor(public navCtrl: NavController, public navParams: NavParams, private surveyProvider: SurveysProvider, private storage: Storage) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SurveyPage');


        // this.dispayPoll();

        this.survey = this.navParams.get('survey');

        // console.log(this.survey)
    }

    selectAnswer(answer: PollAnswer) {
        this.storage.get("user").then((user) => {
            this.surveyProvider.createSurveyAnswer(this.survey, answer, serialize(user)).subscribe();
        }, error => {
            console.log(error)
        });
    }

    dispayPoll() {
        this.storage.get("user").then(users => {
            console.log(users);
            this.surveyProvider.getSurvey(serialize(users)).subscribe(survey => {
                // console.log(survey);
                this.survey = <Survey>survey;
                console.log(this.survey);
            }, error1 => {
                console.log("Not survey found");
            });
        }, error => {
            console.log(error);
        });

    }
}
