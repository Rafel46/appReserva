import { Component } from '@angular/core';
@Component({
  selector: 'trianguloR.component',
  templateUrl: 'trianguloretangulo.component.html',

})
export class TrianguloRetanguloComponent{
  calcularArea(altura,base):void{
    let alturaR = Number(altura);
    let baseR = Number(base);
    let area = (baseR * alturaR) / 2;
    alert('A área do seu triangulo retângulo é '+area);


  }
}
