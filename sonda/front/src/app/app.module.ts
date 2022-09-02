import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AeronaveListagemComponent } from './components/aeronave-listagem/aeronave-listagem.component';
import { AeronaveCadastroComponent } from './components/aeronave-cadastro/aeronave-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    AeronaveListagemComponent,
    AeronaveCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
