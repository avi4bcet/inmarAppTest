import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { LoginserviceService } from './loginservice.service';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms'
import {MyDirective} from './my-directive';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { ManagebinsComponent } from './managebins/managebins.component';
import { ToastrModule } from 'ngx-toastr';
import { AddbinComponent } from './addbin/addbin.component';
import { EditBinComponent } from './edit-bin/edit-bin.component';
import { AddparttypeComponent } from './addparttype/addparttype.component';
import { AddPartComponent } from './add-part/add-part.component';
import { DataComponentComponent } from './customComponent/data-component/data-component.component';
import { PartstockshowComponent } from './partstockshow/partstockshow.component';
import {routes} from './routing';


@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidebarComponent,
    LoginComponent,
    ManagebinsComponent,
    AddbinComponent,
    EditBinComponent,
    AddparttypeComponent,
    MyDirective,
    AddPartComponent,
    DataComponentComponent,
    PartstockshowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [LoginserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
