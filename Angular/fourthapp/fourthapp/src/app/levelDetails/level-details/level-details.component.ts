import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SahredService } from 'src/app/services/sahred.service';

@Component({
  selector: 'app-level-details',
  templateUrl: './level-details.component.html',
  styleUrls: ['./level-details.component.css'],
})
export class LevelDetailsComponent implements OnInit {
  graduate = new Array<any>();
  undergraduate = new Array<any>();
  professionalStudies = new Array<any>();
  selectedLevel = new Array<any>();
  constructor(
    private sharedService: SahredService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const sss = this.activatedRoute.snapshot.queryParams['screen'];
    if (sss == 1) {
      this.selectedLevel = this.graduate;
    }
    if (sss == 2) {
      this.selectedLevel = this.undergraduate;
    }
    if (sss == 3) {
      this.selectedLevel = this.professionalStudies;
    }
  }
}
