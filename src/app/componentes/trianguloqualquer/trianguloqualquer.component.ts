import  { Component } from '@angular/core';
@Component({
  selector: 'trianguloQ.component',
  styleUrls: ['trianguloqualquer.component.scss'],
  templateUrl : 'trianguloqualquer.component.html',
})
export class TrianguloQualquerComponent{
  area : Number = 0;
  calcularArea(base,altura):void{
    let  baseR = Number(base);
    let alturaR = Number(altura);
    let area = base*altura;
    this.area = area;
  }
}
