import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdivinaElNumeroComponent } from './componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from './componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from './componentes/login/login.component';
//  import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { HttpModule } from '@angular/common/http';

// import { AccordionModule } from 'ngx-bootstrap';
// agrego las clases para utilizar ruteo
import { RouterModule, Routes } from '@angular/router';

import { MiHttpService } from './servicios/mi-http/mi-http.service'; 
import { PaisesService } from './servicios/paises.service'; 

import{ ArchivosJugadoresService} from './servicios/archivos-jugadores.service'; 
import { ErrorComponent } from './componentes/error/error.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from './componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { RuteandoModule } from './ruteando/ruteando.module';
import { MaterialModule } from './app.material.module';
// declaro donde quiero que se dirija
/*
const MiRuteo = [{path: 'error' , component: ErrorComponent},
{path: 'Login' , component: LoginComponent},
{path: 'Principal' , component: PrincipalComponent , pathMatch: 'full'},
{path: 'Adivina' , component: AdivinaElNumeroComponent},
{path: 'AdivinaMasListado' , component: AdivinaMasListadoComponent},
{path: 'AgilidadaMasListado' , component: AgilidadMasListadoComponent},
{path: 'Agilidad' , component: AgilidadAritmeticaComponent},
{path: '' , component: LoginComponent , pathMatch: 'full'},

{path: '**' , component: ErrorComponent} ];
*/
import { JugadoresListadoComponent } from './componentes/jugadores-listado/jugadores-listado.component';

import { JuegoServiceService } from './servicios/juego-service.service';
import { ListadosComponent } from './componentes/listados/listados.component';
import { JuegosComponent } from './componentes/juegos/juegos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { MenuCardComponent } from './componentes/menu-card/menu-card.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AnagramaComponent } from './componentes/anagrama/anagrama.component';
import { MapaDeGoogleComponent } from './componentes/mapa-de-google/mapa-de-google.component'
import { AgmCoreModule } from '@agm/core';
import { InputJugadoresComponent } from './componentes/input-jugadores/input-jugadores.component';
import { SexoPipe } from './pipes/sexo.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { TatetiComponent } from './componentes/tateti/tateti.component';
import { PiedraPapelTijeraComponent } from './componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { MemotestComponent } from './componentes/memotest/memotest.component';
import { SnakeComponent } from './componentes/snake/snake.component';
import { BestScoreManagerService } from './servicios/best-score-manager.service';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    AdivinaElNumeroComponent,
    ListadoDeResultadosComponent,
    ErrorComponent,
    PrincipalComponent,
    LoginComponent,
    AgilidadAritmeticaComponent,
    ListadosComponent,
    JuegosComponent,
    RegistroComponent,
    MenuCardComponent,
    QuienSoyComponent,
    AnagramaComponent,
    MapaDeGoogleComponent,
    JugadoresListadoComponent,
    InputJugadoresComponent,
    SexoPipe,
    TatetiComponent,
    PiedraPapelTijeraComponent,
    MemotestComponent,
    SnakeComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RuteandoModule,
    ReactiveFormsModule,
    // HttpModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB6f8x4IjRlesQ3oETc6BXYQHVRTOlY3Ys'
    }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule

    // NgbModule.forRoot(MiRuteo),
    // importo el ruteo
    // RouterModule.forRoot(MiRuteo)
  ],
  providers: [ JuegoServiceService, MiHttpService,PaisesService,ArchivosJugadoresService,BestScoreManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
