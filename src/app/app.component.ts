import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includeLetters = false;

  onChangeUseLetters(): any {
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick(): any {
    console.log(this.includeLetters);
    this.password = 'My Password!!!';
  }
}
