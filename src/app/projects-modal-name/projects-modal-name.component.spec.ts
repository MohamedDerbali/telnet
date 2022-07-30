import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsModalNameComponent } from './projects-modal-name.component';

describe('ProjectsModalNameComponent', () => {
  let component: ProjectsModalNameComponent;
  let fixture: ComponentFixture<ProjectsModalNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsModalNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsModalNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
