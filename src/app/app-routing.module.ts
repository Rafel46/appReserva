import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import  {TrianguloRetanguloComponent} from './componentes/trianguloretangulo/trianguloretangulo.component';
import {TrianguloEquilateroComponent} from './componentes/trianguloequilatero/trianguloequilatero.component';
import {TrianguloQualquerComponent} from './componentes/trianguloqualquer/trianguloqualquer.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'trianguloretangulo', component: TrianguloRetanguloComponent },
  { path: 'trianguloequilatero', component : TrianguloEquilateroComponent },
  { path: 'trianguloqualquer', component : TrianguloQualquerComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
