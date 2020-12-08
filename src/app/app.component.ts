import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includeLetters = false;

  onButtonClick(): any {
    this.password = 'My Password!!!';
  }

  onChangeUseLetters(): any {
    console.log(this.includeLetters);
    this.includeLetters = !this.includeLetters;
  }
}
