import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Survey} from "../../models/survey";
import {HttpClient} from "@angular/common/http";
import {SurveysProvider} from "../../providers/surveys/surveys";
import {PollPage} from "../poll/poll";
import {SurveyPage} from "../survey/survey";

/**
 * Generated class for the SurveysPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-surveys',
    templateUrl: 'surveys.html',
    providers:[SurveysProvider],
})
export class SurveysPage {

    surveys: Survey[];

    constructor(public navCtrl: NavController, public navParams: NavParams,  private surveyProvider: SurveysProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SurveysPage');
        this.show();
    }

    show() {
        this.surveyProvider.getSurveys().subscribe(surveys => {
            this.surveys = surveys;
        }, error1 => {
            console.log(error1);
        })
    }

    goToSurvey(survey: Survey) {
        this.navCtrl.push(SurveyPage, {"survey": survey})
    }
}
