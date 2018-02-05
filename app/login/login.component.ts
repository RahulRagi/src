import { Component, OnInit } from '@angular/core';


import { FormsModule } from '@angular/forms';

import { Http, Response, Headers, RequestOptions } from '@angular/http';



@Component({

selector: 'app-login',

templateUrl: './login.component.html',

styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {



constructor(private _http:Http) { }



ngOnInit() {

}

onsubmit(a)

{

console.log(a);

var headers= new Headers();

headers.append('Content-Type', 'application/json');

let options = new RequestOptions({ headers: headers });


this._http.post('/api/login',a, options)

.subscribe(data => {

alert(data);

}, error => {

console.log(JSON.stringify(error.json()));

})



}


}
