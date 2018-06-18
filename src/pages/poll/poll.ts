import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

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
    property: Observable<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad PollPage');
        this.property = this.http.get('http://127.0.0.1:8000/scene/last');
        this.property.subscribe(data =>{console.log('background: ',data)});
        // this.http.get('http://127.0.0.1:8000/scene/last', {}, {})
        //     .then(data => {
        //
        //         console.log(data.status);
        //         console.log(data.data); // data received by server
        //         console.log(data.headers);
        //
        //     })
        //     .catch(error => {
        //
        //         console.log(error.status);
        //         console.log(error.error); // error message as string
        //         console.log(error.headers);
        //
        //     });

    }

}
