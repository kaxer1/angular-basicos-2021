import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input('data_nuevo') nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  // Output sirve para emitir eventos especificando el tipo de dato ya q es generico por defecto
  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  constructor( private dbzService: DbzService) { }

  agregar() {
    // .trim() => es para borrar espacios en blanco de una cadena
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }
    // this.onNuevoPersonaje.emit(this.nuevo);
    
    this.dbzService.agregarPersonaje(this.nuevo)

    this.nuevo = {
      nombre: '',
      poder: 0
    }
    
  }

}
