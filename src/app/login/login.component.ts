import { Component, OnInit } from '@angular/core';
// import { FormBuilder,  } from '@angular/forms';
import { Router } from '@angular/router';

import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 


  constructor(private router: Router, private fs: FoodService, /*private fb: FormBuilder*/) { }

  ngOnInit(): void {

  }
  login() {
    // var user=''
    // var email=''
    // var psw =''
    // this.fs.login(user,email,psw).subscribe((result:any)=>{

    //   alert(result.message)
      
    //   this.router.navigateByUrl('')
      
    //      },
    //      result=>{
    //       alert(result.error.message) }
    //      )

         this.router.navigateByUrl('')
  }
   
  }
  


  
