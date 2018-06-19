import {Component, NgZone} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PollEditorPage} from "../poll-editor/poll-editor";
import {PollsProvider} from "../../providers/polls/polls";
import {Poll} from "../../models/poll";

@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html'
})
export class ContactPage {
    private polls: Poll[];

    constructor(public navCtrl: NavController, private pollProvider: PollsProvider, private zone: NgZone) {

    }

    ionViewDidEnter() {
        this.getPolls();
    }

    getPolls() {
        this.pollProvider.getAll().subscribe(polls => {
            this.zone.runTask(() => this.polls = polls);

        });
    }

    goToPollEditor() {
        this.navCtrl.push(PollEditorPage);
    }

}
