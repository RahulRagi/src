import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Router} from '@angular/router'

@Component({
  selector: 'app-reistration',
  templateUrl: './reistration.component.html',
  styleUrls: ['./reistration.component.css'],
})
export class ReistrationComponent {

   fullname : string;
   address : string;
   email : string;
   phonenumber : number;
   password : string;
   confirmpassword : string;
   x : boolean;
   y : boolean;
   constructor(private _http:Http,private router:Router){
   }
    onsubmit(a){

{

this.fullname=a.name;

this.address=a.address;

console.log(this.fullname+this.address);

console.log(a);

var headers= new Headers();

headers.append('Content-Type', 'application/json');

let options = new RequestOptions({ headers: headers });


this._http.post('/api/signup',a, options)

.subscribe(data => {

alert('Registered Successfully');
this.router.navigate(['api/login'])

}, error => {

console.log(JSON.stringify(error.json()));

})



}
  
    }
  
    validate()
    {
      this.password;
      this.confirmpassword ;
  
      if(this.password == this.confirmpassword)
      {
        this.x = true;
        this.y = false;
      }
      else if(this.password != this.confirmpassword)
      {
        this.x = false;
        this.y = true;
      }
    }
  }
  

