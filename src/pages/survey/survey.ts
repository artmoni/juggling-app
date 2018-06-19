import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Survey} from "../../models/survey";
import {pollAnswer} from "../../models/poll_answer";
import {SurveysProvider} from "../../providers/surveys/surveys";

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

    constructor(public navCtrl: NavController, public navParams: NavParams,private surveyProvider: SurveysProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SurveyPage');

        this.survey = this.navParams.get('survey');
    }
    selectAnswer(answer: pollAnswer) {
        this.surveyProvider.createSurveyAnswer(this.survey, answer).subscribe();
    }
}
