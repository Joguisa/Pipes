import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.css'],
})
export class OrdenarComponent {
  mayusculas: boolean = true;
  ordenarPor: string = '';

  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Linterna verde',
      vuela: true,
      color: Color.verde,
    },
    {
      nombre: 'Flash',
      vuela: false,
      color: Color.rojo,
    },
  ];

  cambiar() {
    this.mayusculas = !this.mayusculas;
  }

  cambiarOrden(valor: string) {
    this.ordenarPor = valor;
  }
}
