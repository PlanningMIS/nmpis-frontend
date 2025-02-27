import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNumericFormat]',
  standalone: true

})

export class NumericFormatDirective {
      constructor(private el: ElementRef, private renderer: Renderer2) {}
    
      @HostListener('input', ['$event'])
      onInputChange(event: Event): void {
        const input = event.target as HTMLInputElement;
        let value = input.value.replace(/,/g, ''); // Remove existing commas
    
        if (!value) {
          // If the value is empty, set it to an empty string
          this.renderer.setProperty(input, 'value', '');
          return;
        }
    
        if (isNaN(Number(value))) return; // Ensure only numbers are entered
    
        // Format number with commas
        value = this.formatNumber(value);
    
        // Update the input value
        this.renderer.setProperty(input, 'value', value);
      }
    
      private formatNumber(value: string): string {
        const number = parseFloat(value);
        return isNaN(number) ? '' : number.toLocaleString('en-US', { maximumFractionDigits: 0 });
      }
    }
