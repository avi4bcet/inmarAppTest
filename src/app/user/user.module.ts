import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TechnicianComponent} from './technician-component';
import {RouterModule} from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component:TechnicianComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [TechnicianComponent],
  declarations: [TechnicianComponent]
})
export class UserModule { }
