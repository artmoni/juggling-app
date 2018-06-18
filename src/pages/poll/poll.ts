import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {HTTP} from "@ionic-native/http";
import {Http} from "@angular/http";

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

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    }

    data: any = {};

    ionViewDidLoad() {
        console.log('ionViewDidLoad PollPage');

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

    create(){
        let question = 'Ceci est une question';
        let url = 'http://127.0.0.1:8000/polls?test=toto';

        let headers = new HttpHeaders({"Content-Type": "application/json"});
        // headers.set("Accept", "application/json");
        // headers.set("Content-Type", "application/json");
        //
        //
        // headers.append('Access-Control-Allow-Origin' , '*');
        // headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');

        let body = {
            question: "Question numero 1"
        };
        this.http.post(url,body, {headers: headers})
            .subscribe(data => {
                this.data.response = data["_body"]; //https://stackoverflow.com/questions/39574305/property-body-does-not-exist-on-type-response
            }, error => {
                console.log("Oups!");
            });
    }

}
