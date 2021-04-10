import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { KanbansComponent } from './kanbans/kanbans.component';

const routes: Routes = [
  { path: '', component: AuthentificationComponent },
  { path: 'kanbans/:email', component: KanbansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
