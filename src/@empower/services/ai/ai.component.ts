import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, Input, ViewChild, ViewEncapsulation, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { empowerAnimations } from '@empower/animations';

@Component({
    selector: 'empower-ai',
    templateUrl: './ai.component.html',
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
export class EmpowerAIComponent {
    // data: EmpowerConfirmationConfig = inject(MAT_DIALOG_DATA);

    @ViewChild('messageContainer') messageContainer: ElementRef | undefined;

    message: string = `
    <div>
  <h1><b>Evaluation of the Construction of a New Central Railway Line Proposal</b></h1>

  <h3>1. National, Regional, and International Development Goals (10%)</h3>
  <ul>
    <li><strong>1.1 Tanzania Development Vision (TDV 2025):</strong> Aligned (2.00%)</li>
    <p>The project aligns with TDV 2025, which emphasizes human capital development through quality education. The construction of district offices for the Teachers Service Commission (TSC) will improve the working conditions of teachers, thereby enhancing the quality of education, which is a key pillar of TDV 2025.</p>

    <li><strong>1.2 FYDP III:</strong> Aligned (3.00%)</li>
    <p>The project is aligned with the Third Five-Year Development Plan (FYDP III), which prioritizes education as a critical sector for economic transformation. The project supports the plan's goal of improving service delivery in the education sector.</p>

    <li><strong>1.3 SDG & Agenda 2063:</strong> Aligned (1.50%)</li>
    <p>The project aligns with Sustainable Development Goal (SDG) 4 (Quality Education) and Agenda 2063, which emphasizes the importance of education in Africa's development. By improving the working conditions of teachers, the project contributes to achieving these global and continental goals.</p>

    <li><strong>1.4 Nature of the project/program:</strong> New (1.50%)</li>
    <p>The project is new, as it involves the construction of district offices for TSC, which is a new initiative aimed at improving the working environment for TSC staff.</p>

    <li><strong>1.5 Prioritization and Sequencing within the sector:</strong> New (2.00%)</li>
    <p>The project is prioritized within the education sector, as it addresses the critical need for improved infrastructure to support teachers, who are key to achieving quality education.</p>
  </ul>

  <h3>2. Project Framework and Technical Feasibility (10%)</h3>
  <ul>
    <li><strong>2.1.1 Project Scope:</strong> Specified (0.71%)</li>
    <p>The project scope is clearly defined, with the construction of 114 district offices for TSC.</p>

    <li><strong>2.1.2 Project Logical Framework:</strong></li>
    <ul>
      <li><strong>2.1.2.1 Project Goal:</strong> Specified (0.12%)</li>
      <p>The goal is to provide a conducive working environment for TSC staff.</p>

      <li><strong>2.1.2.2 Project Purpose:</strong> Specified (0.12%)</li>
      <p>The purpose is to improve service delivery to teachers.</p>

      <li><strong>2.1.2.3 Project Outputs:</strong> Specified (0.12%)</li>
      <p>The outputs include the construction of office buildings.</p>

      <li><strong>2.1.2.4 Project Activities:</strong> Specified (0.12%)</li>
      <p>Activities include site preparation, construction, and installation of services.</p>

      <li><strong>2.1.2.5 Project inputs (resources):</strong> Specified (0.12%)</li>
      <p>Inputs include financial resources, construction materials, and human resources.</p>

      <li><strong>2.1.2.6 Objective Verifiable Indicators:</strong> Specified (0.12%)</li>
      <p>Indicators include the number of offices constructed and the improvement in service delivery.</p>
    </ul>

    <li><strong>2.1.3 Implementation Plan (Action Plan):</strong> Specified (0.71%)</li>
    <p>The implementation plan is outlined, with phases for construction starting with 114 offices.</p>

    <li><strong>2.1.4 Compensation to PAP:</strong> N/A (0.71%)</li>
    <p>Not applicable, as the project does not involve displacement of people.</p>

    <li><strong>2.1.5 Certificate of Right Occupance (land):</strong> N/A (0.71%)</li>
    <p>Not applicable, as the project will be constructed on government-owned land.</p>

    <li><strong>2.1.6 Management and Institution Setup:</strong> Specified (0.71%)</li>
    <p>The management structure is specified, with TSC overseeing the project.</p>

    <li><strong>2.1.7 Identification of Project Implementation Team:</strong> Specified (0.71%)</li>
    <p>The project implementation team is identified, with TSC responsible for execution.</p>

    <li><strong>2.2 Technical Feasibility:</strong></li>
    <ul>
      <li><strong>2.2.1 Technology and System Integration:</strong> Feasible (0.63%)</li>
      <p>The technology and systems required for construction are feasible.</p>

      <li><strong>2.2.2 Technical Skills and Expertise:</strong> Feasible (0.63%)</li>
      <p>The required technical skills and expertise are available.</p>

      <li><strong>2.2.3 Technical Resource Availability (materials, tools, equipment, and technology):</strong> Available (0.63%)</li>
      <p>The necessary resources are available.</p>

      <li><strong>2.2.4 Regulatory and Standards Compliance of the respective industry:</strong> Feasible (0.63%)</li>
      <p>The project complies with regulatory and industry standards.</p>

      <li><strong>2.2.5 Facilitative Infrastructure Requirements:</strong> N/A (0.63%)</li>
      <p>Not applicable, as the project involves new construction.</p>

      <li><strong>2.2.6 Scalability and Flexibility:</strong> Feasible (0.63%)</li>
      <p>The project is scalable and flexible, with plans to construct offices in phases.</p>

      <li><strong>2.2.7 Technical Maintenance cycle:</strong> Feasible (0.63%)</li>
      <p>The maintenance cycle is feasible, with plans for ongoing upkeep.</p>

      <li><strong>2.2.8 Cost Analysis of technical components:</strong> Feasible (0.63%)</li>
      <p>The cost analysis is provided, with detailed estimates for construction.</p>
    </ul>
  </ul>

  <h3>3. Financial and Economic Viability (10%)</h3>
  <ul>
    <li><strong>3.1 Financial NPV (FNPV):</strong> Viable (2.00%)</li>
    <p>The project is financially viable, with a positive net present value (NPV).</p>

    <li><strong>3.2 Financial IRR (FIRR):</strong> Viable (1.20%)</li>
    <p>The internal rate of return (IRR) is viable, indicating a good return on investment.</p>

    <li><strong>3.3 Financial BCR (FBCR):</strong> Viable (1.20%)</li>
    <p>The benefit-cost ratio (BCR) is favorable, indicating that the benefits outweigh the costs.</p>

    <li><strong>3.4 Economic NPV (ENPV):</strong> Viable (2.00%)</li>
    <p>The economic NPV is positive, indicating economic viability.</p>

    <li><strong>3.5 Economic IRR (EIRR):</strong> Viable (1.20%)</li>
    <p>The economic IRR is viable, indicating a good economic return.</p>

    <li><strong>3.6 Economic BCR (EBCR):</strong> Viable (1.20%)</li>
    <p>The economic BCR is favorable, indicating that the economic benefits outweigh the costs.</p>

    <li><strong>3.7 Sensitivity Analysis:</strong> Provided (1.20%)</li>
    <p>A sensitivity analysis is provided, showing the project's resilience to changes in key variables.</p>
  </ul>

  <h3>4. Strategic Importance (10%)</h3>
  <ul>
    <li><strong>4.1 Alignment with Sector's Development Agenda:</strong> Aligned (2.00%)</li>
    <p>The project aligns with the education sector's development agenda, focusing on improving teacher service delivery.</p>

    <li><strong>4.2 Quality of Sector growth:</strong> Specified (2.00%)</li>
    <p>The project contributes to the quality of sector growth by improving the working conditions of teachers.</p>

    <li><strong>4.3 Local content and demographic dividend:</strong> Specified (2.00%)</li>
    <p>The project will generate employment and utilize local resources, contributing to the demographic dividend.</p>

    <li><strong>4.4 Project Sustainability:</strong> Specified (2.00%)</li>
    <p>The project is sustainable, with plans for ongoing maintenance and support.</p>

    <li><strong>4.5 Economic Impact of the Project to the Sector Performance:</strong></li>
    <ul>
      <li><strong>4.4.1 Statistics for Project Contribution to sector growth:</strong> Specified (0.25%)</li>
      <p>The project will contribute to sector growth by improving teacher service delivery.</p>

      <li><strong>4.4.2 Statistics for Employment generation:</strong> Specified (0.25%)</li>
      <p>The project will generate temporary and permanent employment.</p>

      <li><strong>4.4.3 Statistics for Balance of Trade (Export and Import):</strong> N/A (0.25%)</li>
      <p>Not applicable, as the project does not directly impact trade.</p>

      <li><strong>4.4.4 Statistics for meeting domestic demand:</strong> Not Specified (0.00%)</li>
      <p>Not specified.</p>

      <li><strong>4.4.5 Statistics for Attracting Foreign Direct Investment (FDI):</strong> N/A (0.25%)</li>
      <p>Not applicable, as the project is domestically funded.</p>

      <li><strong>4.4.6 Attracting foreign currency:</strong> N/A (0.25%)</li>
      <p>Not applicable, as the project does not involve foreign currency.</p>

      <li><strong>4.4.7 Promotion of innovation and value addition:</strong> Specified (0.25%)</li>
      <p>The project promotes innovation by improving service delivery.</p>

      <li><strong>4.4.8 Enhancing country competitiveness:</strong> Specified (0.25%)</li>
      <p>The project enhances competitiveness by improving the quality of education.</p>
    </ul>
  </ul>
<table border="1" cellpadding="8" cellspacing="0" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th colspan="4" style="text-align: center; font-weight: bold; border: 1px solid black;">Assessment Criteria</th>
    </tr>
    <tr>
      <th style="text-align: left; border: 1px solid black;">Criteria</th>
      <th style="text-align: left; border: 1px solid black;">Response</th>
      <th style="text-align: left; border: 1px solid black;">Weight</th>
      <th style="text-align: left; border: 1px solid black;">Score</th>
    </tr>
  </thead>
  <tbody>
    <!-- Section 10 Integration, Synergies and Complementarity -->
    <tr>
      <td colspan="4" style="text-align: center; font-weight: bold; border: 1px solid black;">10 Integration, Synergies, and Complementarity</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">10.1 Complementarity with other projects within the Sector</td>
      <td style="border: 1px solid black;">Yes</td>
      <td style="border: 1px solid black;">2.00%</td>
      <td style="border: 1px solid black;">2.00%</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">10.2 Linkage with other sectorial projects</td>
      <td style="border: 1px solid black;">Yes</td>
      <td style="border: 1px solid black;">2.00%</td>
      <td style="border: 1px solid black;">2.00%</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">10.3 Multiplier effect of the project</td>
      <td style="border: 1px solid black;">Yes</td>
      <td style="border: 1px solid black;">2.00%</td>
      <td style="border: 1px solid black;">2.00%</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">10.4 Knowledge and Skills Leverage</td>
      <td style="border: 1px solid black;">N/A</td>
      <td style="border: 1px solid black;">2.00%</td>
      <td style="border: 1px solid black;">0.00%</td> <!-- If not applicable, you can set the score to 0 -->
    </tr>
    <tr>
      <td style="border: 1px solid black;">10.5 Linkage with the National flagship projects</td>
      <td style="border: 1px solid black;">Yes</td>
      <td style="border: 1px solid black;">2.00%</td>
      <td style="border: 1px solid black;">2.00%</td>
    </tr>
    <!-- Subtotal Row -->
    <tr>
      <td colspan="3" style="text-align: right; font-weight: bold; border: 1px solid black;">SUB TOTAL</td>
      <td style="font-weight: bold; text-align: left; border: 1px solid black;">10%</td>
    </tr>
    <!-- Total Row -->
    <tr class='font-extrabold'>
      <td colspan="3" style="text-align: right; font-weight: bold; border: 1px solid black;">TOTAL SCORE</td>
      <td style="font-weight: bold; text-align: left; border: 1px solid black;">90%</td>
    </tr>
  </tbody>
</table>
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
