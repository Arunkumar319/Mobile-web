import { Component, Input, OnInit } from '@angular/core';
import { CoursesInterface, HeaderInterface } from '../myInterfaces/classInterface';

@Component({
  selector: 'app-json-list',
  templateUrl: './json-list.component.html',
  styleUrls: ['./json-list.component.css']
})
export class JsonListComponent implements OnInit {

  @Input() fetchHeader!: HeaderInterface;
  @Input() fetchCourses!: CoursesInterface[]
  tableHeaders: string[] = ['term', 'class', 'credit','description']
  constructor() { }

  ngOnInit(): void {
  }

}
