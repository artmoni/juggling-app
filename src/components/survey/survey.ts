import {Component, Input} from '@angular/core';
import {Survey} from "../../models/survey";

/**
 * Generated class for the SurveyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
    selector: 'survey',
    templateUrl: 'survey.html'
})
export class SurveyComponent {

    @Input() survey: Survey;

    constructor() {
    }

}
