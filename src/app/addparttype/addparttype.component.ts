import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {LoginserviceService} from '.././loginservice.service';
import {Parttype} from '.././parttype.model';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';


@Component({
  selector: 'app-addparttype',
  templateUrl: './addparttype.component.html',
  styleUrls: ['./addparttype.component.css'],
  providers: [LoginserviceService]
})




export class AddparttypeComponent implements OnInit {

  constructor(public loginservice: LoginserviceService, private toastr: ToastrService, private http: Http ) { }

  ngOnInit() {
      //this.loginservice.getAllParts();
      this.resetForm();
  }

  resetForm(form?: NgForm) {
  if (form != null)
    form.reset();
    this.loginservice.getAllParts();
  this.loginservice.selectedParttype = {
    id: null,
    partname: ''
  }
}

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.loginservice.deletePartType(id)
      .subscribe(x => {
       this.loginservice.getAllParts();
       this.toastr.warning("Deleted Successfully","Part Records");
      })
    }
  }

  showForEdit(parts: Parttype) {
    this.loginservice.selectedParttype = Object.assign({}, parts);
  //  return this.loginservice.selectedParttype.partname;
  }

  onSubmit(form: NgForm) {

  if (form.value.partid == null) {
      this.loginservice.postParts(form.value)

        .subscribe(data => {

          //this.resetForm(form);
          this.loginservice.getAllParts();
          this.toastr.success('New Record Added Succcessfully', 'Parttype Record');
        })
  }
    else {
      this.loginservice.putParts(form.value.partid, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.loginservice.getAllParts();
        this.toastr.info('Record Updated Successfully!', 'Part Type Updated');
      });
    }
  }


}
