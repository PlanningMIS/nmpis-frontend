import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistopathologyComponent } from './histopathology.component';

describe('HistopathologyComponent', () => {
  let component: HistopathologyComponent;
  let fixture: ComponentFixture<HistopathologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistopathologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistopathologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
