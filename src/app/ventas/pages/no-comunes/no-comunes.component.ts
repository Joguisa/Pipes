import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { interval } from 'rxjs';
import { tap } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css'],
})
export class NoComunesComponent implements OnInit {
  //i18nSelect
  nombre: string = 'Jonatan';
  genero: string = 'masculino';

  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Juan', 'Juana', 'Pep'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    other: 'tenemos # clientes esperanado.',
  };

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  cambiarCliente() {
    (this.nombre = 'Juana'), (this.genero = 'femenino');
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Quito, Ecuador',
  };

  //Json PIPE

  heroes = [
    {
      nombre: 'Superman',
      vuela: true,
    },
    {
      nombre: 'Batman',
      vuela: false,
    },
    {
      nombre: 'Flash',
      vuela: false,
    },
  ];

  //Async Pipe
  miObservable = interval(3000); //0,1,2,3,4,5

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3000);
  });
}
