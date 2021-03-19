import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre: 'Maestro roshi',
    poder: 500
  }

  // CODIGO REFACTORIZADO.

  

  // EL CODIGO NORMAL. 

  // Se puede obtener la data de esta forma con GETTERS
  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes
  // }
  // agregarNuevoPersonaje(argumento: Personaje) {
  //   this.personajes.push(argumento)
  // }
  // constructor(private dbzService: DbzService) { }

}
