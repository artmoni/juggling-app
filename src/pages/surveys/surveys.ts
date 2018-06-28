import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Survey} from "../../models/survey";
import {SurveysProvider} from "../../providers/surveys/surveys";
import {SurveyPage} from "../survey/survey";
import {Storage} from "@ionic/storage";


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
    providers: [SurveysProvider],
})
export class SurveysPage {

    surveys: Survey[];

    constructor(private storage: Storage, public navCtrl: NavController, public navParams: NavParams, private surveyProvider: SurveysProvider) {
    }

    ionViewDidEnter() {
        this.show();
    }

    show() {
        this.storage.get('user').then(user => {
            this.surveyProvider.getSurveys(user).subscribe(surveys => {
                this.surveys = surveys;
            }, error1 => {
                console.log(error1);
            })
        },error =>{
            console.log(error);
        });
    }

    goToSurvey(survey : Survey) {

        this.navCtrl.push(SurveyPage, {"survey" : survey})

    }
}
