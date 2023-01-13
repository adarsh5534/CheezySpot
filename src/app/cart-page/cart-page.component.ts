import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {

  constructor(private router : Router){

  }
  backtoshopping(){
    this.router.navigateByUrl('')
  }
}
