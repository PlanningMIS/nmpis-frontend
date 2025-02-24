import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]',
  standalone: true
})
export class OnlyNumbersDirective {

  @HostListener('keypress', ['$event']) onKeyPress(event: KeyboardEvent) {
    const allowedPattern = /^[0-9,]+$/; // Allow only numbers and ","
    if (!allowedPattern.test(event.key)) {
      event.preventDefault();
    }
  }
}
