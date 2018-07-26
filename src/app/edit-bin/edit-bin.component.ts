import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LoginserviceService} from '../loginservice.service';
import { NgForm, FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-bin',
  templateUrl: './edit-bin.component.html',
  styleUrls: ['./edit-bin.component.css'],
  providers: [LoginserviceService]
})
export class EditBinComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, public loginservice: LoginserviceService, private toastr: ToastrService) { }

  ngOnInit() {



    this.route.queryParams.subscribe(params => {
           //console.log(params.id);
          // const paramid = params.id;
           this.loginservice.getBinForEdit(params.id);

       })

       //this.resetForm();

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


    //console.log(form.value);
    this.loginservice.putEmployee(form.value.paramid, form.value)
      .subscribe(data => {
        this.resetForm(form);
        //this.loginservice.getEmployeeList();
        this.router.navigate(['managebins']);
        this.toastr.success('Bin Record Updated Succcessfully', 'Bin Updated');
      })


}

}
