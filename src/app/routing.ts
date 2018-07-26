import {Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddPartComponent} from './add-part/add-part.component';
import {ManagebinsComponent} from './managebins/managebins.component';
import {AddbinComponent} from './addbin/addbin.component';
import {EditBinComponent} from './edit-bin/edit-bin.component';
import {AddparttypeComponent} from './addparttype/addparttype.component';
import {PartstockshowComponent} from './partstockshow/partstockshow.component';

export const routes:Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
    },
    {
      path: 'login',
      component: LoginComponent
     },

     {
    path: 'addpartdet',
    component: AddPartComponent
     },
  {
    path:'managebins',
    component: ManagebinsComponent
  },
  {
  path: 'addbin',
  component: AddbinComponent,
  },
  {
  path: 'editbin',
  component: EditBinComponent
  },
  {
    path: 'addpart',
    component: AddparttypeComponent
  },
  {
    path: 'partshow',
    component: PartstockshowComponent
  }
];
