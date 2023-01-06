import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinning-text',
  templateUrl: './spinning-text.component.html',
  styleUrls: ['./spinning-text.component.scss']
})
export class SpinningTextComponent implements OnInit {

  @Input() container:string

  constructor() { }

  ngOnInit(): void {
  }

}
