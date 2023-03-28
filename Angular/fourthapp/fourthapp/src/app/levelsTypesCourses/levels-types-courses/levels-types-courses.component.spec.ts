import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsTypesCoursesComponent } from './levels-types-courses.component';

describe('LevelsTypesCoursesComponent', () => {
  let component: LevelsTypesCoursesComponent;
  let fixture: ComponentFixture<LevelsTypesCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsTypesCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsTypesCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
