import { Component, OnInit } from '@angular/core';
import{ MsjBienvenidaService } from '../servicio/msj-bienvenida.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  msjBienvenida: any;

  constructor(private bienvenidaService: MsjBienvenidaService, translate: TranslateService) { 
    translate.setDefaultLang('es');
    translate.use('es');
  }
  ngOnInit(): void {
  }

  mensajeBienvenida(){
    this.bienvenidaService.mensaje().subscribe({
      next: (r) => this.msjBienvenida = r,
      error: (e) => console.log(JSON.stringify(e))
    });
  }

}
