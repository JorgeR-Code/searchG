import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { PrimengModule } from '../primeng/primeng.module';
import { FormsModule } from '@angular/forms';



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
    FormsModule
  ]
})
export class SearchModule { }
