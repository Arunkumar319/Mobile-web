import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadfootModule } from './modules/headfoot/headfoot.module';
import { MaterialModule } from './modules/material-ui/material-ui.module';
import { ScreensComponent } from './screens/screens/screens.component';
import { ScreenDetailsComponent } from './screen-details/screen-details.component';
import { TabsComponent } from './tabs/tabs/tabs.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MainFormComponent } from './mainForm/main-form/main-form.component';
import { CoursesListComponent } from './courses/courses-list/courses-list.component';
import { LevelsOfCoursesComponent } from './levelsCourses/levels-of-courses/levels-of-courses.component';
import { ListOfCoursesComponent } from './listOfCourses/list-of-courses/list-of-courses.component';
import { LevelsTypesCoursesComponent } from './levelsTypesCourses/levels-types-courses/levels-types-courses.component';
import { LevelDetailsComponent } from './levelDetails/level-details/level-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreensComponent,
    ScreenDetailsComponent,
    TabsComponent,
    MainFormComponent,
    CoursesListComponent,
    LevelsOfCoursesComponent,
    ListOfCoursesComponent,
    LevelsTypesCoursesComponent,
    LevelDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HeadfootModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
