import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PollPage} from "../pages/poll/poll";
import {HttpClientModule} from "@angular/common/http";
import {SurveysProvider} from '../providers/surveys/surveys';
import {SurveysPage} from "../pages/surveys/surveys";
import {SurveyPage} from "../pages/survey/survey";
import {PollsProvider} from '../providers/polls/polls';
import {PollEditorPage} from "../pages/poll-editor/poll-editor";
import {IonicStorageModule} from "@ionic/storage";
import {UserProfilePage} from "../pages/user-profile/user-profile";
import {UserProvider} from "../providers/user/user";
import {SurveyComponent} from "../components/survey/survey";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        PollPage,
        SurveysPage,
        SurveyPage,
        PollEditorPage,
        UserProfilePage,
        SurveyComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot(),


    ],

    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        PollPage,
        SurveysPage,
        SurveyPage,
        PollEditorPage,
        UserProfilePage,
        SurveyComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        SurveysProvider,
        PollsProvider,
        UserProvider,
    ]
})
export class AppModule {
}
