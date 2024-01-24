import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { initFlowbite } from 'flowbite';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'school';
  constructor(
    private translate: TranslateService
  ){
    initFlowbite();
    translate.setDefaultLang('km');
  }
  setLang(value : string){
    this.translate.setDefaultLang(value)
  }
}
