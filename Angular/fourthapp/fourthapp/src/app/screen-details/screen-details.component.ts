import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Screens } from '../myClasses/movie.model';
import { SahredService } from '../services/sahred.service';

@Component({
  selector: 'app-screen-details',
  templateUrl: './screen-details.component.html',
  styleUrls: ['./screen-details.component.css']
})
export class ScreenDetailsComponent implements OnInit {
  screen1 = new Array<Screens>();
  screen2 = new Array<Screens>();
  screen3 = new Array<Screens>();
  screen4 = new Array<Screens>();
  selectedScreen = new Array<Screens>();
  constructor(private sharedService: SahredService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
   const sss =  +this.activatedRoute.snapshot.queryParams['screen'];
   if(sss == 1){
    this.selectedScreen = this.screen1;
   }
   if(sss == 2){
    this.selectedScreen = this.screen2;
   }
   if(sss == 3){
    this.selectedScreen = this.screen3;
   }
   if(sss == 4){
    this.selectedScreen = this.screen4;
   }
  }
}
