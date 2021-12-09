import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SelectButtonModule} from 'primeng/selectbutton';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    SelectButtonModule
  ]
})
export class PrimengModule { }
