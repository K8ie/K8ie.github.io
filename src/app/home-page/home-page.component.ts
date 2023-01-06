import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  showPlanning:boolean=false
  showProgramming:boolean=false
  showWebDev:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

  togglePlanning(){
    this.showPlanning= !this.showPlanning
  }
  toggleProgramming(){
    this.showProgramming= !this.showProgramming
  }
  toggleWebDev(){
    this.showWebDev= !this.showWebDev
  }

}
