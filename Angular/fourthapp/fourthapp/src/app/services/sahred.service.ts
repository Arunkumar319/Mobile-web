import { Injectable } from '@angular/core';
import { Screens } from '../myClasses/movie.model';

@Injectable({
  providedIn: 'root'
})
export class SahredService {

  graduate = new Array<any>();
  undergraduate = new Array<any>();
  professionalStudies = new Array<any>();
  footerDetails: any;
  headerDetails: any;
  coursesList = new Array<any>;
  courseDataForTab = new Array<any>;
  LevelCourseDataForTab = new Array<any>;
  constructor() {}
  
}
