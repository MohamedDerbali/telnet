import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoReportComponent } from './step-two-report.component';

describe('StepTwoReportComponent', () => {
  let component: StepTwoReportComponent;
  let fixture: ComponentFixture<StepTwoReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
