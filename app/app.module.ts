import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReistrationComponent } from './reistration/reistration.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { JavacComponent } from './javac/javac.component';
import { MongodbComponent } from './mongodb/mongodb.component';
import { Angular2Component } from './angular2/angular2.component';
import { CplusComponent } from './cplus/cplus.component';
import { CsharpComponent } from './csharp/csharp.component';
import { MoralComponent } from './moral/moral.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReistrationComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    JavacComponent,
    MongodbComponent,
    Angular2Component,
    CplusComponent,
    CsharpComponent,
    MoralComponent




  ],
  imports: [
    BrowserModule, FormsModule,HttpModule,
    RouterModule.forRoot([{
      path:'api/signup',component:ReistrationComponent
    },{
      path:'api/login',component:LoginComponent
    },{
      path:'about',component:AboutComponent
    },{
      path:'contact',component:ContactComponent
    },{
      path:'home',component:HomeComponent
    },{
      path:'courses',component:CoursesComponent,children:[{path:'java',component:JavacComponent},
      {path:'mangodb',component:MongodbComponent},
       {path:'angular2',component:Angular2Component},
       {path:'cplus',component:CplusComponent},
       {path:'csharp',component:CsharpComponent}]
    },
  {
    path:'',redirectTo:'home',pathMatch:'full'
  }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
