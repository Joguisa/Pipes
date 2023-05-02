import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(color: number): any {
    if (color == 0) {
      return 'rojo';
    } else if (color == 1) {
      return 'negro';
    } else if (color == 2) {
      return 'azul';
    } else if (color == 3) {
      return 'verde';
    }
  }
}
