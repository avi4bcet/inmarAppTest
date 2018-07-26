import { Component, OnInit } from '@angular/core';
import {LoginserviceService} from '.././loginservice.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css'],
  providers: [LoginserviceService]
})
export class AddPartComponent implements OnInit {

  constructor(public loginservice: LoginserviceService, private toastr: ToastrService) {

   }

  ngOnInit() {
    this.loginservice.getAllParts();
    this.loginservice.getEmployeeList();
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

    onSubmit(form: NgForm) {
      this.loginservice.postPartsDetails(form.value)

        .subscribe(data => {

          this.resetForm(form);
          this.loginservice.getAllParts();
          this.toastr.success('New Record Added Succcessfully', 'Parttype Record');
        })
    }

}
