import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{titulo}}</h1>
        <h3>La base es: <strong>55</strong></h3>
        <button (click)="acumular(base);"> + {{base}} </button>
        <span> {{numero}} </span>
        <button (click)="acumular(-base);"> - {{base}} </button>
    `
})

export class ContadorComponente {
    titulo: string = 'Contador APP';
    numero: number = 10;

    base: number = 5;
    
    acumular(valor: number) {
        this.numero += valor;
    }
}