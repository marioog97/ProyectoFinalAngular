import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CEspeciesComponent } from './c-especies/c-especies.component';
import { CFavoritosComponent } from './c-favoritos/c-favoritos.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { EspeciesService } from './servicio/especies.service';
import { EspecieComponent } from './especie/especie.component';



const routes: Routes = [
  {path:'', component: CEspeciesComponent},
  {path: 'especies', component: CEspeciesComponent},
  {path: 'favoritos', component: CFavoritosComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    CEspeciesComponent,
    CFavoritosComponent,
    EspecieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [EspeciesService],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
