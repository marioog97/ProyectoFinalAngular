import { Component, OnInit } from '@angular/core';
import { EspeciesService } from '../servicio/especies.service';

@Component({
  selector: 'app-especie',
  templateUrl: './especie.component.html',
  styleUrls: ['./especie.component.css']
})
export class EspecieComponent implements OnInit {

  especies: any;


  constructor(private espService: EspeciesService) {
      this.listarEspecies();
   }

  ngOnInit(): void {
  }

  listarEspeciesSimple(){
    this.especies = this.espService.listadoDeEspecies();
  }

  listarEspecies(){
    this.espService.listarEspecies().subscribe({
      next: (r) => this.especies = r,
      error: (e) => console.log(JSON.stringify(e))
    });
  }

}
