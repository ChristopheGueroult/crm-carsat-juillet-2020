import { Directive, Input, OnChanges, HostBinding } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() appState: string;
  @HostBinding('class') tdClassName: string;
  constructor() {
  }

  ngOnChanges() {
    // console.log(this.appState);
    this.tdClassName = this.formatClass(this.appState);
  }

  private formatClass(state: string): string {
    return `state-${state.toLowerCase()}`;
  }

}

// get item.state in a @Input property
// generate string :
// item.state = CANCELED => state-canceled
// item.state = OPTION => state-option
// item.state = CONFIRMED => state-confirmed
// Binder la propriété class du host element td with my string
