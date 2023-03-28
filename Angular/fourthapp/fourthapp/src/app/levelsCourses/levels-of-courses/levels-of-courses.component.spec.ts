import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsOfCoursesComponent } from './levels-of-courses.component';

describe('LevelsOfCoursesComponent', () => {
  let component: LevelsOfCoursesComponent;
  let fixture: ComponentFixture<LevelsOfCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsOfCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsOfCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
