import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ListaPrenotazioneComponent } from './lista-prenotazione/lista-prenotazione.component';
import { VisuaPrenotazioneComponent } from './visua-prenotazione/visua-prenotazione.component';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaPrenotazioneComponent,
    VisuaPrenotazioneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  //Anche qui
    ReactiveFormsModule,
    NgbModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
