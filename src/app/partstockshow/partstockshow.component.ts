import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { LoginserviceService } from '.././loginservice.service';
import { ToastrService } from 'ngx-toastr';
import {} from '@angular/common'

@Component({
  selector: 'app-partstockshow',
  templateUrl: './partstockshow.component.html',
  styleUrls: ['./partstockshow.component.css']
})


export class PartstockshowComponent implements OnInit, OnChanges, DoCheck {

  constructor(private http: Http, public loginservice: LoginserviceService) { }

  ngOnInit() {
    console.log("on in it called");
    this.loginservice.getPartsStock();
  }
  ngOnChanges() {
    console.log("onChanges called");
  }

  ngDoCheck() {
    console.log("Do check called");
  }

  ngAfterContentInit()
  {
    console.log("Afetr Content Init");
  }

  ngAfterContentChecked() {
    console.log("After content Checked called");
  }

  ngAfterViewInit() {
    console.log("After View Init called");
  }

  ngAfterViewChecked() {
    console.log("After View Checked called");
  }

  ngOnDestroy() {
    console.log("On Destroy called");
  }


}
