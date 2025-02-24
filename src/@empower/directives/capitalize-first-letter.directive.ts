import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';


@Directive({
  selector: '[appCapitalizeFirstLetter]',
  standalone: true
})
export class CapitalizeFirstLetterDirective {

  constructor(private el: ElementRef, private control: NgControl) {}

  @HostListener('input') onInput(): void {
    let value = this.el.nativeElement.value;
    if (value && value.length > 0) {
      const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);
      this.control.control?.setValue(capitalizedValue, { emitEvent: false });
    }
  }

}
