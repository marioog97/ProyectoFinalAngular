import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CEspeciesComponent } from './c-especies/c-especies.component';
import { CFavoritosComponent } from './c-favoritos/c-favoritos.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

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
    CFavoritosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [PrincipalComponent]
})
export class AppModule { }
