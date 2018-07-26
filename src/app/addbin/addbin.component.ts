import { Component, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { LoginserviceService } from '.././loginservice.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addbin',
  templateUrl: './addbin.component.html',
  styleUrls: ['./addbin.component.css']
})
export class AddbinComponent implements OnInit {

  constructor(public loginservice : LoginserviceService, private toastr : ToastrService, private route: ActivatedRoute) { }

  ngOnInit() {




  this.resetForm();
  }

    resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.loginservice.selectedBin = {
      id: null,
      bins_name: '',
      bins_number: '',
      box_name: '',
      box_number: ''
    }
  }

  onSubmit(form: NgForm) {

      this.loginservice.postEmployee(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.loginservice.getEmployeeList();
          this.toastr.success('New Record Added Succcessfully', 'Bin Added');
        })


  }





}
