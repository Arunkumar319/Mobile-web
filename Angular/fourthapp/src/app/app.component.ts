import { Component } from '@angular/core';
import { Student } from './myClasses/personalInfo';
import externalData from '../assets/data/cp.json'
import { HeaderInterface, CoursesInterface } from './myInterfaces/classInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fourthapp';
  
  student1:Student = {
    name: 'abc',
    id: 1,
    login: 'xyz',
    campus: 'davis'
  }

  passHeader: HeaderInterface = externalData.ProgramData
  passCourses: CoursesInterface[] = externalData.courses


}
