import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {PollPage} from "../poll/poll";
import {SurveysPage} from "../surveys/surveys";
import {Storage} from "@ionic/storage";
import {User} from "../../models/user";
import {Poll} from "../../models/poll";
import {UserProvider} from "../../providers/user/user";
import {PollEditorPage} from "../poll-editor/poll-editor";
import {serialize} from "serializer.ts/Serializer";
import {UserProfilePage} from "../user-profile/user-profile";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = HomePage;
    tab2Root = SurveysPage;
    tab3Root = ContactPage;
    tab4Root = UserProfilePage;

    constructor(private storage: Storage, private userProvider: UserProvider) {

    }


    ionViewDidLoad() {
        this.storage.get("user").then((user) => {
                if (user == null) {
                    this.userProvider.createUser().subscribe(user => {
                            console.log(user);
                            this.storage.set("user", (user));
                        }, error => {
                            console.log("error");
                        }
                    );

                }
                console.log("oku" + user);
            }, (error) => {
                console.log("ko" + error);

            }
        );


    }
}
