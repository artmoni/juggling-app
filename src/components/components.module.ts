import { NgModule } from '@angular/core';
import { UserFormComponent } from './user-form/user-form';
import { SurveyComponent } from './survey/survey';
@NgModule({
	declarations: [UserFormComponent,
    SurveyComponent],
	imports: [],
	exports: [UserFormComponent,
    SurveyComponent]
})
export class ComponentsModule {}
