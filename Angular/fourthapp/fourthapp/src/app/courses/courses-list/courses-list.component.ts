import { Component, OnInit } from '@angular/core';
import { SahredService } from 'src/app/services/sahred.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css'],
})
export class CoursesListComponent implements OnInit {
  coursesList = new Array();
  constructor(private sharedService: SahredService) {}

  ngOnInit(): void {
    this.coursesList = this.sharedService.coursesList;
  }
}
