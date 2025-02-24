import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyLetters]',
  standalone: true
})
export class OnlyLettersDirective {

  constructor() { }

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const regex = /^[A-Za-z\s]+$/; // Allow letters and spaces
    if (!regex.test(event.key)) {
      event.preventDefault();
    }
  }

}
