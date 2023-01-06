import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-turner',
  templateUrl: './time-turner.component.html',
  styleUrls: ['./time-turner.component.scss'],
})
export class TimeTurnerComponent implements OnInit {
  isclicked: boolean = false;

  PERIOD: string = 'traveling';
  travelingString: string =
    'I spend most of 2022 and 2021 traveling across South- and North america with friends and family. Among the places I visited where Argentina, Guatemala, Mexico, California, Nevada and NewYork.';
  capcoString: string =
    ' Temporarilry worked for Capco and contributed to different projects as a temporary employee.In this time I worked very close with consultants rather than developers and have therefore gotten noticably good at translating technical specifications into every day terms.';
  psi2String: string =
    'After successfully graduating with my EFZ, I had planned for a year of travelling. But, since the year was 2020, and he who cannot be named was raging all around the world, that didnt happen. Hindsight 2020 am I right';
  psiString: string =
    'In 2016 I started my apprentenceship (Applicationdevelopment) at PSI and enjoyed excellent education that prepared me more than well for my future as Web Developer';
  birthString: string =
    'I was born in Mexico, San Cristobal de las Casas on the 23 of august 1998 .';
  nothingString: string =
    'Moved to Switzerland in 2005 and attended public education.';
  efzString: string = 'Worked on graduating with good grades and solid skills';


  constructor() {}


  ngOnInit(): void {
    let slider = document.getElementById('myRange');

    slider.oninput = () => {
      //@ts-ignore
      let currentValue = parseInt(slider.value);
      console.log(currentValue);

      if (currentValue <= 7) {
        this.PERIOD = 'traveling';
      }
      if (currentValue > 7 && currentValue < 25) {
        this.PERIOD = 'capco';
      }
      if (currentValue >= 25 && currentValue <= 55) {
        this.PERIOD = 'psi2';
      }
      if (currentValue > 55 && currentValue <= 70) {
        this.PERIOD = 'efz';
      }
      if (currentValue > 70 && currentValue <= 80) {
        this.PERIOD = 'psi';
      }
      if (currentValue > 80 && currentValue < 90) {
        this.PERIOD = 'nothing';
      }
      if (currentValue >= 90) {
        this.PERIOD = 'birth';
      }
    };
  }

  setTrue(): void {
    this.isclicked = true;
    document.getElementById('myRange').classList.remove('still');
    document.getElementById('myRange').classList.add('moving');
  }

  setFalse(): void {
    this.isclicked = false;
    document.getElementById('myRange').classList.remove('moving');
    document.getElementById('myRange').classList.add('still');
  }
}
