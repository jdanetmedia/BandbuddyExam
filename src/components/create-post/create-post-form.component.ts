import { Component } from '@angular/core';

@Component({
  selector: 'app-create-post-form',
  templateUrl: 'create-post-form.component.html'
})
export class CreatePostFormComponent {

  text: string;

  constructor() {
    console.log('Hello CreatePostComponent Component');
    this.text = 'Hello World';
  }

}
