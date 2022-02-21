import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { EspeciesService } from '../servicio/especies.service';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css']
})
export class EspecieComponent implements OnInit {

  especies: any;

  formBusquedaEspecies: FormGroup = new FormGroup({
    nombreEspecie: new FormControl(''),
    clasificacion: new FormControl('')
  });

  especieData: any = { nombre: "", clasificacion: "" };


  constructor(private espService: EspeciesService, translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
    this.listarEspecies();
  }

  ngOnInit(): void {
  }

  listarEspeciesSimple() {
    this.especies = this.espService.listadoDeEspecies();
  }

  listarEspecies() {
    this.espService.listarEspecies().subscribe({
      next: (r) => this.especies = r,
      error: (e) => console.log(JSON.stringify(e))
    });
  }

  eventoBtnBuscar(): void {
    console.log("Nombre de la especie: " + this.especieData.nombre + " Clasificación: " + this.especieData.clasificacion)
  }

  eventoBtnLimpiar(): void {

  }

  anadirFavoritos(nomEspecie: string): void {
    console.log("Especie " + nomEspecie + " añadido a favoritos")
  }

  
}
