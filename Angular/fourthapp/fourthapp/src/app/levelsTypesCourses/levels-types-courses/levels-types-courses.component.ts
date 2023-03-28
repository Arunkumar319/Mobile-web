import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SahredService } from 'src/app/services/sahred.service';

@Component({
  selector: 'app-levels-types-courses',
  templateUrl: './levels-types-courses.component.html',
  styleUrls: ['./levels-types-courses.component.css']
})
export class LevelsTypesCoursesComponent implements OnInit {
  graduate = new Array<any>();
  undergraduate = new Array<any>();
  professionalStudies = new Array<any>();
  constructor(private sharedService: SahredService, private router: Router) { }

  ngOnInit(): void {
    this.graduate = this.sharedService.graduate;
    this.undergraduate = this.sharedService.undergraduate;
    this.professionalStudies = this.sharedService.professionalStudies;
  }
  showScreen1Details(){
    this.router.navigate(['level-details'],{queryParams:{level: 1}})
  }
  showScreen2Details(){
    this.router.navigate(['level-details'],{queryParams:{screen: 2}})
  }
  showScreen3Details(){
    this.router.navigate(['level-details'],{queryParams:{screen: 3}})
  }
  showScreen4Details(){
    this.router.navigate(['level-details'],{queryParams:{screen: 4}})
  }
}
