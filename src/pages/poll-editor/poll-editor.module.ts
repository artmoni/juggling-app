import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PollEditorPage } from './poll-editor';

@NgModule({
  declarations: [
    PollEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(PollEditorPage),
  ],
})
export class PollEditorPageModule {}
