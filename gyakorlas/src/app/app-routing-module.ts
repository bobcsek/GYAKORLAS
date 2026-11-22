import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Fooldal } from './fooldal/fooldal';
import { Error } from './error/error';

const routes: Routes = [
  {path: "fooldal", component:Fooldal},

  {path: '', redirectTo: 'fooldal', pathMatch: 'full'},

  {path: '**', component:Error},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
