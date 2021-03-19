import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {

    // _atributo ==> estandar de propiedad privada.
    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 15000 },
        { nombre: 'Vegeta', poder: 8000 }
    ]

    get personaje(): Personaje[] {
        // ... ==> es un operador spred || buena practica para crear un nuevo arreglo. 
        return [...this._personajes]
    }
    constructor() { }

    agregarPersonaje(arg: Personaje) {
        this._personajes.push(arg);
    }

}