import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'JonaTan GuilLEN';
  numero: number = 1000;

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.numero);
  }
}
