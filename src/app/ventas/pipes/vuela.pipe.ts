import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vuela',
})
export class VuelaPipe implements PipeTransform {
  transform(valor: boolean): string {
    // if (valor == true) {
    //   return 'si';
    // } else {
    //   return 'no';
    // }

    return valor ? 'si' : 'no';
  }
}
