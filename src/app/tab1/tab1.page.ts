import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { CalculatorPage } from '../calculator/calculator.page';
import { TellPage } from '../tell/tell.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  name = 'Processando Direito'; 
  videoEmbed = "https://www.youtube.com/embed/RVG3ixkcZhQ?list=PLggF9b2U9Qsqnzghg8oZ6Z_dl8QG4w0mG";

  constructor(protected sanitizer: DomSanitizer, public modalController: ModalController) {}

  sanitizerResources(value){
    return this.sanitizer.bypassSecurityTrustResourceUrl(value);
  }

  async presentModalCalc() {
    const modal = await this.modalController.create({
      component: CalculatorPage,
      componentProps:{}
    });
    return await modal.present();
  }
  async presentModalTell() {
    const modal = await this.modalController.create({
      component: TellPage,
      componentProps:{}
    });
    return await modal.present();
  }
}
