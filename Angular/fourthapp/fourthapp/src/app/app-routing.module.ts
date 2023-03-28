import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { LevelDetailsComponent } from './levelDetails/level-details/level-details.component';
import { LevelsOfCoursesComponent } from './levelsCourses/levels-of-courses/levels-of-courses.component';
import { LevelsTypesCoursesComponent } from './levelsTypesCourses/levels-types-courses/levels-types-courses.component';
import { ListOfCoursesComponent } from './listOfCourses/list-of-courses/list-of-courses.component';
import { MainFormComponent } from './mainForm/main-form/main-form.component';
import { ScreenDetailsComponent } from './screen-details/screen-details.component';
import { ScreensComponent } from './screens/screens/screens.component';
import { TabsComponent } from './tabs/tabs/tabs.component';

const routes: Routes = [
  { path: '', redirectTo: 'tabs', pathMatch: 'full' },
  { path: 'screens', component: ScreensComponent },
  { path: 'screen-details', component: ScreenDetailsComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'main-form', component: MainFormComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'levels-courses', component: LevelsOfCoursesComponent },
  { path: 'list-of-courses', component: ListOfCoursesComponent },
  { path: 'level-type-courses', component: LevelsTypesCoursesComponent },
  { path: 'level-details', component: LevelDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
