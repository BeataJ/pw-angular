import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters(): any {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(): any {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(): any {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(): any {
    console.log(
      ` ${this.includeLetters}  ${this.includeNumbers} ${this.includeSymbols}`
    );
    this.password = 'My Password!!!';
  }
}
