import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PrimengModule } from '../primeng/primeng.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PrimengModule,
    SharedModule
  ]
})
export class ProfileModule { }
