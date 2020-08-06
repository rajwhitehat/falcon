import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindComponent } from './find/find.component';
import { ResultComponent } from './result/result.component';
import { FalconeRoutingModule } from './falcone-routing.module';
import { FalconeComponent } from './falcone/falcone.component';
import {FormsModule}   from '@angular/forms';

@NgModule({
  declarations: [FindComponent, ResultComponent, FalconeComponent],
  imports: [
    CommonModule,
    FalconeRoutingModule,
    FormsModule
  ]
})
export class FalconeModule { }
