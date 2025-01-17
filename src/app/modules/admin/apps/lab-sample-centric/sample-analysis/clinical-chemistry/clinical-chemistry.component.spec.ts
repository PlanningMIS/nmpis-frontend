import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicalChemistryComponent } from './clinical-chemistry.component';

describe('ClinicalChemistryComponent', () => {
  let component: ClinicalChemistryComponent;
  let fixture: ComponentFixture<ClinicalChemistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClinicalChemistryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClinicalChemistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
