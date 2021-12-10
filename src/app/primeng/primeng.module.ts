import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SelectButtonModule} from 'primeng/selectbutton';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CardModule} from 'primeng/card';



@NgModule({
  imports: [
    CommonModule,
  ],
  exports:[
    SelectButtonModule,
    InputTextModule,
    ButtonModule,
    ProgressSpinnerModule,
    CardModule
  ]
})
export class PrimengModule { }
