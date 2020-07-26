import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MkComponentsComponent} from './mk-components/mk-components.component';

const routes: Routes = [
  {path: '', component: MkComponentsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
