import { Component, OnInit } from '@angular/core';
import { SahredService } from 'src/app/services/sahred.service';
import Data from '../../../../assets/data/examData.json';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
footerDetails: any;
currentDate = new Date();
examData = Data;
  constructor(private sharedService: SahredService) { }

  ngOnInit(): void {
    this.footerDetails = this.sharedService.footerDetails;
  }

}
