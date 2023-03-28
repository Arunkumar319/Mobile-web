import { Component, OnInit } from '@angular/core';
import { SahredService } from 'src/app/services/sahred.service';

@Component({
  selector: 'app-levels-of-courses',
  templateUrl: './levels-of-courses.component.html',
  styleUrls: ['./levels-of-courses.component.css']
})
export class LevelsOfCoursesComponent implements OnInit {
  levelCourseDataForTab= new Array();
  constructor(private sharedService: SahredService) { }

  ngOnInit(): void {
    this.levelCourseDataForTab = this.sharedService.courseDataForTab;
  }

}
