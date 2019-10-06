import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  name = 'Calcular Final'; 
  media;
  quantoFalta;
  constructor() { }

  ngOnInit() {
  }

  calcularMedia(){
    if(this.media < 40.0){
      this.quantoFalta = "Moss, tu não faz nem a final :("
    } else if(this.media >= 70.0){
      this.quantoFalta = "Moss, você já passou :)"
    } else{
      var v1 = 60.0;
      var v2 = 40.0;
      var resultado;
      resultado = 125 - ((this.media * v1) / v2);
      this.quantoFalta = "Você precisa tirar pelo menos " + resultado.toFixed(2);
    }
  }

}
