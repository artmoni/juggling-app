import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Poll} from "../../models/poll";
import {PollsProvider} from "../../providers/polls/polls";
import {PollAnswer} from "../../models/poll_answer";

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
    answers: PollAnswer[] = [];


    constructor(public navCtrl: NavController, public navParams: NavParams, private pollProvider: PollsProvider) {
        this.poll = new Poll();
        this.answers.push(new PollAnswer());
        this.answers.push(new PollAnswer());
    }

    ionViewDidLoad() {

    }

    createPoll() {
        this.pollProvider.createPoll(this.poll).subscribe(poll => {
            for (let answer of this.answers) {
                this.pollProvider.createAnswer(poll, answer).subscribe(answer => {
                        console.log(answer);
                    }
                );
            }
            this.navCtrl.pop();
        });
    }

}
