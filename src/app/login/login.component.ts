import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user2;
  constructor(private router: Router,  private loginidentifier: LoginserviceService) {
 
   }

  ngOnInit() {
  }
  
  loginMethod(e)
  {
    e.preventDefault();
    
    var username = e.target.elements[0].value;
    var pd = e.target.elements[1].value;
    if(username=='admin@capgemini.com' && pd=='admin')
    {
      this.loginidentifier.setUserLoggedIn(username);
      this.router.navigate(['managebins']);
  }
    else {
      alert("Wrong Username/Password");
    }
    

}
}
