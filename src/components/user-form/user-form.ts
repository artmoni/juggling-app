import { Component } from '@angular/core';

/**
 * Generated class for the UserFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-form',
  templateUrl: 'user-form.html'
})
export class UserFormComponent {

  text: string;

  constructor() {
    console.log('Hello UserFormComponent Component');
    this.text = 'Hello World';
  }

}
