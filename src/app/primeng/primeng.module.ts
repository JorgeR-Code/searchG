import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SelectButtonModule} from 'primeng/selectbutton';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    SelectButtonModule,
    InputTextModule,
    ButtonModule
  ]
})
export class PrimengModule { }
