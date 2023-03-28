import { Component, OnInit } from '@angular/core';
import { SahredService } from 'src/app/services/sahred.service';

@Component({
  selector: 'app-list-of-courses',
  templateUrl: './list-of-courses.component.html',
  styleUrls: ['./list-of-courses.component.css']
})
export class ListOfCoursesComponent implements OnInit {
  coursesList = new Array();
  constructor(private sharedService: SahredService) {}

  ngOnInit(): void {
    this.coursesList = this.sharedService.coursesList;
  }

}
