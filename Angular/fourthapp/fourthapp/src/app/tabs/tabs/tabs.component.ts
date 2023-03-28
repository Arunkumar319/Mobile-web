import { Component, OnInit } from '@angular/core';
import { SahredService } from 'src/app/services/sahred.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  title = 'Exam Fall 2022';

constructor(private sharedService: SahredService){}
ngOnInit(): void {
}
}
