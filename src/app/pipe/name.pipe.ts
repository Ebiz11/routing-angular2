import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'PipeName'
})

export class NamePipe implements PipeTransform {
  transform(value: string): string {
    let res = 'Players '+ value
    return res;
  }
}
