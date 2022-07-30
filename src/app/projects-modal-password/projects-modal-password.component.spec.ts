import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsModalPasswordComponent } from './projects-modal-password.component';

describe('ProjectsModalPasswordComponent', () => {
  let component: ProjectsModalPasswordComponent;
  let fixture: ComponentFixture<ProjectsModalPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsModalPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsModalPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
