import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TextComponent implements OnInit {
  @Input() color: any;
  constructor() {
  }

  ngOnInit(): void {
    // console.log(this.color);
  }

}
