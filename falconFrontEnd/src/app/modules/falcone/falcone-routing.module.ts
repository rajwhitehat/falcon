import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FindComponent } from './find/find.component';
import { ResultComponent } from './result/result.component';
import { FalconeComponent } from './falcone/falcone.component';
export const falconeRoutes: Routes = [
  {path: '', component: FalconeComponent },
  { path: 'find', component: FindComponent },
  { path: 'result', component: ResultComponent }
];

@NgModule({
  imports: [RouterModule.forChild(falconeRoutes)],
  exports: [RouterModule],
})
export class FalconeRoutingModule {}
