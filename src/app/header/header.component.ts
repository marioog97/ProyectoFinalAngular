import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translate: TranslateService) { 
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
  }

    //Se cambia idioma 
    changeLangugeToSpanish():void {
      this.translate.use('es');
      console.log('Idioma español: ' + this.translate.instant('header.home'));
    }
  
    
    //Se cambia idioma 
    changeLangugeToEnglish():void {
      this.translate.use('en');
      console.log('Idioma inglés');
    }
}
