import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css'],
})
export class NumerosComponent {
  ventasNetas: number = 12134234.2355;
  porcentaje: number = 0.2;
}
