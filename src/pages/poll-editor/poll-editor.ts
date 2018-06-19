import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Poll} from "../../models/poll";
import {PollsProvider} from "../../providers/polls/polls";

/**
 * Generated class for the PollEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-poll-editor',
    templateUrl: 'poll-editor.html',
})
export class PollEditorPage {

    poll: Poll;

    constructor(public navCtrl: NavController, public navParams: NavParams, private pollProvider: PollsProvider) {
        this.poll = new Poll();
    }

    ionViewDidLoad() {

    }

    createPoll() {
        this.pollProvider.createPoll(this.poll).subscribe();
    }

}
