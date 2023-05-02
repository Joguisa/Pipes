import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  nombreLower: string = 'jonatán';
  nombreUpper: string = 'FERNANDO';
  nombreCompleto: string = 'JonaTaN GuiLLEn';

  fecha: Date = new Date(); //el día de hoy
}
