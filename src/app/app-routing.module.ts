import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { Class1Component } from './class1/class1.component';
import { Class2Component } from './class2/class2.component';

const routes: Routes = [
  { path: 'class1', component: Class1Component },
  { path: 'class2', component: Class2Component },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
