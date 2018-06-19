import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {PollPage} from "../poll/poll";
import {SurveysPage} from "../surveys/surveys";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SurveysPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
