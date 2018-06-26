import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {User} from "../../models/user";
import {Storage} from "@ionic/storage";

/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-user-profile',
    templateUrl: 'user-profile.html',
})
export class UserProfilePage {

    user: User;

    constructor(private  storage: Storage, private  userProvider: UserProvider, public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad UserProfilePage');
        this.receiveUser();
    }

    receiveUser() {
        this.storage.get('user').then(user => {
            this.userProvider.receive(user).subscribe(users => {
                this.user = <User>users;
            }, error => {
                console.log(error);
            });
        }, error => {
            console.log(error);
        });
    }

    update() {
        console.log(this.user);
        this.userProvider.update(this.user).subscribe(user => {
            this.navCtrl.pop();
        }, error => {
            console.log(error);
        });
        this.navCtrl.push(UserProfilePage);
    }
}
