import { Component, OnInit } from '@angular/core';
import { SahredService } from './services/sahred.service';
import Data from '../assets/data/examData.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  examData = Data;
  
  coursesList = this.examData.listOfCourses;
  courseDataForTab = [{
    "courseName": "Honours Bachelor of Community Safety",
    "credits": 40,
    "duration": "4 years",
  },
  {
    "courseName": "Internet of Things and Machine Intelligence",
    "credits": 24,
    "duration": "1 year",
  },]
  LevelCourseDataForTab = [{
    "courseName": "Honours Bachelor of Community Safety",
    "level": "graduate",
  },
  {
    "courseName": "Internet of Things and Machine Intelligence",
    "level": "undergraduate",
  },
  {
    "courseName": "Internet of Things and Machine Intelligence",
    "level": "continuing & professional Studies",
  },
]
  constructor(private sharedService: SahredService) {}
  ngOnInit(): void {
    this.sharedService.coursesList = this.coursesList;
    this.sharedService.courseDataForTab = this.courseDataForTab;
    this.sharedService.courseDataForTab = this.LevelCourseDataForTab;
    this.LevelCourseDataForTab.forEach((course: any) => {
      if(course.level === 'graduate'){
        this.sharedService.graduate.push(course);
      }
      if(course.level === 'undergraduate'){
        this.sharedService.undergraduate.push(course)
      }
      if(course.level === 'continuing & professional Studies'){
        this.sharedService.professionalStudies.push(course)
      }
    })
  }
}
