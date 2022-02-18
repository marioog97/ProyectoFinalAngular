import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-c-especies',
  templateUrl: './c-especies.component.html',
  styleUrls: ['./c-especies.component.css']
})
export class CEspeciesComponent implements OnInit {

  formBusquedaEspecies: FormGroup = new FormGroup({
    nombreEspecie: new FormControl(''),
    clasificacion: new FormControl('')
  });

  especieData: any = {nombre: "", clasificacion: ""};

  constructor() { }

  ngOnInit(): void {
  }

  eventoBtnBuscar():void{
    console.log("Nombre de la especie: " + this.especieData.nombre + " Clasificación: " + this.especieData.clasificacion)
  }

  eventoBtnLimpiar():void{
    //TODO
  }

}
