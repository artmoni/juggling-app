import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {AuthentificationProvider} from "../../providers/authentification/authentification";
import {User} from "../../models/user";

/**
 * Generated class for the SubscribePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-subscribe',
    templateUrl: 'subscribe.html',
})
export class SubscribePage {

    user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams, private authentificationProvider: AuthentificationProvider) {
        this.user = new User();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SubscribePage');
    }

    createUser() {
        this.authentificationProvider.signIn(this.user);
    }

}
