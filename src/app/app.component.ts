import { Component } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  length = 0;
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(value: string): any {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

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
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnoprstuvwyz';
    const symboles = '!@#$%^&*()';

    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symboles;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);

      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
}
