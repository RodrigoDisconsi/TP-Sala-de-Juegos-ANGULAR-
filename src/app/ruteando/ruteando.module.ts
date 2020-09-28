import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { ListadoComponent } from'../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component';
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component';
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { TatetiComponent } from '../componentes/tateti/tateti.component';
import{ PiedraPapelTijeraComponent } from '../componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AnagramaComponent } from '../componentes/anagrama/anagrama.component';
import { MemotestComponent } from '../componentes/memotest/memotest.component';

// declaro donde quiero que se dirija
const MiRuteo = [
{path: '' , component: PrincipalComponent},
{path: 'Jugadores' , component: JugadoresListadoComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Mapa' , component: MapaDeGoogleComponent},
{path: 'QuienSoy' , component: QuienSoyComponent},
{path: 'Registro' , component: RegistroComponent},
{path: 'Principal' , component: PrincipalComponent},
{path: 'Listado' , component: ListadoComponent},



{ path: 'Juegos' ,
component: JuegosComponent ,
children:
    [{path: '' , component: MenuCardComponent},
     {path: 'Adivina' , component: AdivinaElNumeroComponent},
     {path: 'Agilidad' , component: AgilidadAritmeticaComponent},
     {path: 'PiedraPapelTijera' , component: PiedraPapelTijeraComponent},
     {path: 'Tateti' , component: TatetiComponent},
     {path: 'Anagrama' , component: AnagramaComponent},
     {path: 'Memotest' , component: MemotestComponent},
    ]
},
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
