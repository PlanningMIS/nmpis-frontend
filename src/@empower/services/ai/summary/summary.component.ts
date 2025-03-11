import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { empowerAnimations } from '@empower/animations';

@Component({
    selector: 'summary-ai',
    templateUrl: './summary.component.html',
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
export class EmpowerSummaryComponent {
    // data: EmpowerConfirmationConfig = inject(MAT_DIALOG_DATA);

    @ViewChild('messageContainer') messageContainer: ElementRef | undefined;

    message: string = `
   <div>
  <h1><b>Summary: Construction of Teachers Service Commission (TSC) District Offices</b></h1>

  <h2 class="font-bold">1. Project Overview</h2>
  <p>
    The proposed project involves the construction of <strong>114 district offices</strong> for the Teachers Service Commission (TSC) across Tanzania. It seeks to address challenges such as <em>inadequate office space, poor working conditions</em>, and <em>overburdened staff</em>, which currently affect service delivery and staff productivity.
  </p>

  <h2 class="font-bold">2. Project Objectives</h2>
  <ul>
    <li>Provide conducive working environments for TSC staff.</li>
    <li>Improve service delivery to teachers.</li>
    <li>Strengthen the security and management of teachers' employment records.</li>
    <li>Promote fairness and transparency in handling teachers’ administrative and disciplinary matters.</li>
  </ul>

  <h2 class="font-bold">3. Project Components</h2>
  <p>
    The project will be implemented through several critical components including:
  </p>
  <ul>
    <li>Geo-technical surveys and site preparation</li>
    <li>Construction of foundations and office structures</li>
    <li>Installation of essential services (electricity, water, sanitation, ICT infrastructure, etc.)</li>
  </ul>

  <h2 class="font-bold">4. Project Cost Estimates</h2>
  <p>
    The estimated costs for the project are as follows:
  </p>
  <ul>
    <li><strong>Cost per district office:</strong> TZS 1,126,590,574.50</li>
    <li><strong>Total cost for 114 offices:</strong> TZS 15,772,268,043.00</li>
  </ul>

  <h2 class="font-bold">5. Strategic Alignment</h2>
  <p>
    The project is aligned with both national and international development goals:
  </p>
  <ul>
    <li>Tanzania Development Vision (TDV 2025)</li>
    <li>Third Five-Year Development Plan (FYDP III)</li>
    <li>Sustainable Development Goal (SDG) 4 – Quality Education</li>
    <li>African Union Agenda 2063</li>
  </ul>

  <h2 class="font-bold">6. Expected Benefits</h2>
  <ul>
    <li>Improved office infrastructure for TSC staff.</li>
    <li>Enhanced working conditions and staff motivation.</li>
    <li>Job creation during construction and operational phases.</li>
    <li>Efficient and timely service delivery to teachers across districts.</li>
    <li>Better management and security of teachers’ data and employment records.</li>
  </ul>

  <h2 class="font-bold">7. Implementation and Sustainability</h2>
  <p>
    The project is considered <strong>technically feasible, financially viable</strong>, and <strong>strategically important</strong> for enhancing education service systems in Tanzania.
  </p>
  <p>
    With strong stakeholder engagement, adequate funding, and robust risk mitigation strategies, the project is expected to successfully achieve its goals and deliver long-term benefits to the education sector.
  </p>
</div>
`;
  
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
        }, 50); // Delay per word
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
