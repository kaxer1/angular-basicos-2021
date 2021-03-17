import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({ 
    // Todo lo que defina AQUI de declaraciones esta invisible o encapsulado para el resto
    declarations: [ // Que cosas tienen el módulo. (Componentes, pipes)
        HeroeComponent,
        ListadoComponent
    ],
    // Cosas que quiero q sean visibles afuera del modulo
    // Para Hacerlo visible se debe exportar.
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    // En los imports significa que iran modulos
    imports: [
        CommonModule // Ofrece las directivas como el NG-IF, NG-TEMPLATE, NG-FOR entre otras cosas
    ]


})
export class HeroesModule {

}