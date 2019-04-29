import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  Selector: 'trianguloE.component',
  StyleUrls : ['trianguloequilatero.component.scss'],
  templateUrl: 'trianguloequilatero.component.html',
})
export class TrianguloEquilateroComponent{
  constructor(public toastController: ToastController) {}

 async presentToast() {
   const toast = await this.toastController.create({
     message: 'O resultado é'+this.areaR,
     duration: 2000
   });
   toast.present();
 }
 areaR : Number = 0;
    calcularArea(lado):void{
      let ladoR = Number(lado);
      let area = (ladoR^2) * Math.sqrt(3)/4;
      this.areaR = area;
      this.presentToast();

    }



}
