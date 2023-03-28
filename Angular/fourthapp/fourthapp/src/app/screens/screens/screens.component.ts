import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Screens } from 'src/app/myClasses/movie.model';
import { SahredService } from 'src/app/services/sahred.service';

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {
  screen1 = new Array<Screens>();
  screen2 = new Array<Screens>();
  screen3 = new Array<Screens>();
  screen4 = new Array<Screens>();
  constructor(private sharedService: SahredService, private router: Router) { }

  ngOnInit(): void {
    // this.screen1 = this.sharedService.screen1;
    // this.screen2 = this.sharedService.screen2;
    // this.screen3 = this.sharedService.screen3;
    // this.screen4 = this.sharedService.screen4;
  }
  showScreen1Details(){
    this.router.navigate(['screen-details'],{queryParams:{screen: 1}})
  }
  showScreen2Details(){
    this.router.navigate(['screen-details'],{queryParams:{screen: 2}})
  }
  showScreen3Details(){
    this.router.navigate(['screen-details'],{queryParams:{screen: 3}})
  }
  showScreen4Details(){
    this.router.navigate(['screen-details'],{queryParams:{screen: 4}})
  }
}
