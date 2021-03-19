import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  // @Input('data') personajes: Personaje[] = [];
  // 'data' = ahi se puede poner el nombre de la propiedad que se reconoce en el HTML 
  // del componente padre 

  get personajes(): Personaje[] {
    return this.dbzService.personaje
  }

  constructor(private dbzService: DbzService) { }

}
