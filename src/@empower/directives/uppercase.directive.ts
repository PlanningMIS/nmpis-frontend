import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUppercase]',
  standalone: true
})

export class UppercaseDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = this.el.nativeElement as HTMLInputElement;
    input.value = input.value.toUpperCase(); // Convert to uppercase
  }
}
