import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParasitologyComponent } from './parasitology.component';

describe('ParasitologyComponent', () => {
  let component: ParasitologyComponent;
  let fixture: ComponentFixture<ParasitologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParasitologyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParasitologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
