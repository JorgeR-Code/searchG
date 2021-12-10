import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    SearchComponent
  ],
  exports:[
    SearchComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimengModule,
    FormsModule,
    RouterModule
  ]
})
export class SearchModule { }
