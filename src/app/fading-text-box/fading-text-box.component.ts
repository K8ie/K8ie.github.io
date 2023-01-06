import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fading-text-box',
  templateUrl: './fading-text-box.component.html',
  styleUrls: ['./fading-text-box.component.scss'],
})
export class FadingTextBoxComponent implements OnInit {
  @Input() text: string;
 @Input() isShown:boolean=true

  characterArray: string[]=[]



  constructor() {}

  ngOnInit(): void {
    let output = this.text.split('');
    this.characterArray=output
  }
}
