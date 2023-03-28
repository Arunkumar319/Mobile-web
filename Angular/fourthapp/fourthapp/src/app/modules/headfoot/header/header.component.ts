import { Component, OnInit, Input } from '@angular/core';
import { SahredService } from 'src/app/services/sahred.service';
import Data from '../../../../assets/data/examData.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerDetails: any;
  examData = Data;
  constructor(private sharedService: SahredService) { }

  ngOnInit(): void {
    this.headerDetails = this.sharedService.headerDetails;
    // console.log(data.personalInfo)
  }

}
