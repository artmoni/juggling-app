import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PollEditorPage} from "../poll-editor/poll-editor";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {

    constructor(public navCtrl: NavController) {

    }

    goToPollEditor() {
        this.navCtrl.push(PollEditorPage);
    }

}
