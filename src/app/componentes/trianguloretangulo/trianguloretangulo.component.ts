import { Component } from '@angular/core';
@Component({
  selector: 'trianguloR.component',
  templateUrl: 'trianguloretangulo.component.html',
  styleUrls: ['trianguloretangulo.component.scss'],
})
export class TrianguloRetanguloComponent{
  areaf : Number  = 0;
  calcularArea(altura,base):void{
    let alturaR = Number(altura);
    let baseR = Number(base);
    let area = (baseR * alturaR) / 2;
    this.areaf = area;


  }
}
