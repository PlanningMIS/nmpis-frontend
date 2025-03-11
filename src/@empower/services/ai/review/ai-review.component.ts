import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { empowerAnimations } from '@empower/animations';

@Component({
    selector: 'empower-ai-review',
    templateUrl: './ai-review.component.html',
    styles: [
        `
            .empower-confirmation-dialog-panel {
                @screen md {
                    @apply w-1/2;
                }

                .mat-mdc-dialog-container {
                    .mat-mdc-dialog-surface {
                        padding: 0 !important;
                    }
                }
            }

        .loader {
            padding:80px;
            width: 100%;
            height: 100%;
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f3f3f3;
        }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    animations: empowerAnimations,
    imports: [MatButtonModule, MatDialogModule, MatIconModule, CommonModule, FormsModule],
})
export class EmpowerAIReviewComponent {
    // data: EmpowerConfirmationConfig = inject(MAT_DIALOG_DATA);

    @ViewChild('messageContainer') messageContainer: ElementRef | undefined;

    message: string = `
    <div>
  <h1><b>Review</b></h1>

  <h3>
  Tanzania Development Vision (TDV 2025)	Aligned	60 out of 100
  </h3>

  <h3>
   SDG	Aligned	80 out of 100
  </h3>

  <h3>
   FYDP III	Aligned	60 out of 100
  </h3>

  <h3 class="text-red-600">
   Agenda 2063	Not Aligned Correctly	(20 out of 100)
  </h3>

</div>`;
  
    displayedText: string = '';
    words: string[] = [];
    currentIndex: number = 0;
    isLoading: boolean = true;
    userInput: string = '';

    constructor(private cdr: ChangeDetectorRef){}

  isContentVisible: boolean = false;  // Variable to control the visibility of the second div
  
    ngOnInit() {
        setTimeout(() => { 
            // Use an arrow function here
            document.getElementById('loader')?.classList.add('hidden');
            this.isContentVisible = true;
        }, 5000);

      this.words = this.message.split(' ');
      this.typeWords();
    }
  
    typeWords() {
      if (this.currentIndex < this.words.length) {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
          this.displayedText += (this.currentIndex > 0 ? ' ' : '') + this.words[this.currentIndex];
          this.currentIndex++;
          this.scrollToBottom(); 
          this.typeWords();
        }, 300); // Delay per word
      }
    }

    scrollToBottom() {
        if (this.messageContainer) {
          this.messageContainer.nativeElement.scrollTop = this.messageContainer.nativeElement.scrollHeight;
        }
      }
  
    sendMessage() {
      if (this.userInput.trim()) {
        console.log('User Question:', this.userInput);
        this.userInput = '';
      }
    }
}
