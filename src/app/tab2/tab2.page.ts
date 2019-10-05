import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  name = 'Reportar'; 
  linkEmbed = "https://docs.google.com/forms/d/e/1FAIpQLSerOvglQmQUQz77MFIaGTJnoYppGVl6GLUHoFgGavshqYSJHQ/viewform?embedded=true";

  constructor(protected sanitizer: DomSanitizer) {}

  sanitizerResources(value){
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
