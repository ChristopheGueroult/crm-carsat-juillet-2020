import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(item: any, ...args: any[]): any {
    // console.log(args);
    if (item) {
      if (args[0] === 'ttc') {
        return item.nbJours * item.tjmHt * (1 + item.tva / 100);
      }
      return item.nbJours * item.tjmHt;
    }
    return null;
  }

}

