import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { LoginserviceService } from '.././loginservice.service';
import { ToastrService } from 'ngx-toastr';
import {Bins } from '.././bins.model';



@Component({
  selector: 'app-managebins',
  templateUrl: './managebins.component.html',
  styleUrls: ['./managebins.component.css']
})
export class ManagebinsComponent implements OnInit {
  public httpdata;
  public servUrl = 'http://localhost:5000/Tasks/delete';
  constructor(private http: Http, public loginservice: LoginserviceService, private toastr : ToastrService) { }

  ngOnInit() {
    this.loginservice.getEmployeeList();

   }

   showForEdit(bins: Bins) {
    // console.log(bins.id);
    this.loginservice.selectedBin = Object.assign({}, bins);;
  }


  onDelete(id: number) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.loginservice.deleteEmployee(id)
      .subscribe(x => {
        this.loginservice.getEmployeeList();
       this.toastr.warning("Deleted Successfully","Bins Details");
      })
    }
  }





  }
