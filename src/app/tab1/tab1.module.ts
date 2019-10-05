
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { CalculatorPage } from '../calculator/calculator.page';
import { CalculatorPageModule } from './../calculator/calculator.module';
import { TellPageModule } from '../tell/tell.module';
import { TellPage } from '../tell/tell.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    CalculatorPageModule,
    TellPageModule
  ],
  declarations: [Tab1Page],
  entryComponents:[
    CalculatorPage,
    TellPage
  ]
})
export class Tab1PageModule {}
