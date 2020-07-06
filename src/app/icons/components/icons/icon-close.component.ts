import { Component, OnInit } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-icon-close',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconCloseComponent implements OnInit {
  public myIcon = faTimes;
  constructor() { }

  ngOnInit(): void {
  }

}
