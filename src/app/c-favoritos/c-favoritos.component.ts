import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-c-favoritos',
  templateUrl: './c-favoritos.component.html',
  styleUrls: ['./c-favoritos.component.css']
})
export class CFavoritosComponent implements OnInit {

  constructor(translate: TranslateService) { 
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
  }

}
