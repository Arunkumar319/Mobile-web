import { Component, Input, OnInit } from '@angular/core';
import { CoursesInterface, HeaderInterface } from '../myInterfaces/classInterface';

@Component({
  selector: 'app-json-buttons',
  templateUrl: './json-buttons.component.html',
  styleUrls: ['./json-buttons.component.css']
})
export class JsonButtonsComponent implements OnInit {

  @Input() fetchHeader!: HeaderInterface;
  @Input() fetchCourses!: CoursesInterface[]
  constructor() { }

  ngOnInit(): void {
  }

}
