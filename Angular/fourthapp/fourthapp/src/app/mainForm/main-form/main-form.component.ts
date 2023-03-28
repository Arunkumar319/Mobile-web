import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  firstName !: string;
  lastName !: string;
  email !: string;
  dob !: string;
  interest !: string;
  campus !: string;

  constructor() { }

  ngOnInit(): void {
  }
  submitData(){
    
  }
}
