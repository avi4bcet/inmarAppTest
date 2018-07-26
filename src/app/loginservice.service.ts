import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Bins } from './bins.model';
import { Parttype } from './parttype.model';
import { Partstock } from './partstock.model';

@Injectable()
export class LoginserviceService {

  private isUserLoggedIn;
  private username;
  public statusMessage='';

  selectedBin : Bins;
  selectedParttype : Parttype;
  selectPartStock : Partstock;

  binslist: Bins[];
  parttypelist: Parttype[];
  partstocklist: Partstock[];

  constructor(private http:Http) {
  this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user) {
  this.isUserLoggedIn = true;
  this.username = user;
}

  getUserLoggedIn()
  {
    return this.isUserLoggedIn;
  }


  deleteEmployee(id: number) {
    return this.http.delete('http://localhost:5000/Tasks/delete/' + id).map(res => res.json());
  }

  deletePartType(id: number) {
    return this.http.delete('http://localhost:5000/users/delete/' +id).map(res => res.json());
  }




  getEmployeeList(){
    this.http.get('http://localhost:5000/Tasks/')
    .map((data : Response) =>{
      return data.json() as Bins[];
    }).toPromise().then(x => {
      this.binslist = x;
      //console.log(this.binslist);
    })
  }

  getPartsStock() {
    this.http.get('http://localhost:5000/stock').map((data:Response) => {
      return data.json() as Partstock[];
    }).toPromise().then(x=> {
      this.partstocklist = x;
    }, (error) => {
        this.statusMessage="Problem with service!";
        console.log(error);
    }).catch(this.handlePromiseerror);
  }

  handlePromiseerror(error: Response)
  {
    console.log(error);
    throw error;

  }

  getBinForEdit(id){
    this.http.get('http://localhost:5000/Tasks/' +id)
    .map((data : Response) =>{
      return data.json() as Bins[];
    }).toPromise().then(x => {
      this.binslist = x;
      //console.log(this.binslist);
    })
  }

  putEmployee(id, emp) {

    //console.log('sadsa');
    var body = JSON.stringify(emp);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:5000/Tasks/' + id,
      body,
      requestOptions).map(res => res.json());
  }

    postEmployee(bins : Bins){
    var body = JSON.stringify(bins);
      console.log(body);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
    return this.http.post('http://localhost:5000/Tasks/add',body,requestOptions).map(x => x.json());
  }

  getAllParts()
  {
    this.http.get('http://localhost:5000/users/')
    .map((data : Response) =>{
      return data.json() as Parttype[];
    }).toPromise().then(x => {
      this.parttypelist = x;
      //console.log(this.parttypelist);
    })
  }

  postParts(parttype : Parttype){
  var body = JSON.stringify(parttype);
    console.log(parttype);
  var headerOptions = new Headers({'Content-Type':'application/json'});
  var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
  return this.http.post('http://localhost:5000/users/',body,requestOptions).map(x => x.json());
}


postPartsDetails(partstock : Partstock){
  //console.log(parttype);
var body = JSON.stringify(partstock);
  //console.log(partstock);
var headerOptions = new Headers({'Content-Type':'application/json'});
var requestOptions = new RequestOptions({method : RequestMethod.Post,headers : headerOptions});
return this.http.post('http://localhost:5000/stock/',body,requestOptions).map(x => x.json());



}

putParts(id, parts) {

  //console.log('sadsa');
  var body = JSON.stringify(parts);
  var headerOptions = new Headers({ 'Content-Type': 'application/json' });
  var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
  return this.http.put('http://localhost:5000/users/' + id,
    body,
    requestOptions).map(res => res.json());
}


}
