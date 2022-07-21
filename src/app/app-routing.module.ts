import { ManfinalesComponent } from './core/pages/manfinales/manfinales.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './core/pages/clientes/clientes.component';



const routes: Routes = [
  { path:'',redirectTo:'/manfinales',pathMatch:'full'},
  {path:'manfinales',component:ManfinalesComponent},
  {path:'clientes',component:ClientesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
