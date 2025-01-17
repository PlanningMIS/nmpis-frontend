import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-sample-results',
  standalone: true,
  imports: [MatDividerModule, MatButtonModule],
  templateUrl: './sample-results.component.html',
  styleUrl: './sample-results.component.scss'
})
export class SampleResultsComponent {

}
