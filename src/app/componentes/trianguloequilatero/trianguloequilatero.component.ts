import { Component } from '@angular/core';
@Component({
  Selector: 'trianguloE.component',
  StyleUrls : ['trianguloequilatero.component.scss'],
  templateUrl: 'trianguloequilatero.component.html',
})
export class TrianguloEquilateroComponent{
 areaR : Number = 0;
    calcularArea(lado):void{
      let ladoR = Number(lado);
      let area = (ladoR^2) * (mathsqrt(3)/4);
      this.areaR = area;

    }
}
