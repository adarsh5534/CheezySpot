import { Component } from '@angular/core';
import { ActivatedRoute,  } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { Router } from '@angular/router';
@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent {
food!:Foods;
constructor(private  activatedRoute:ActivatedRoute,
  private foodService:FoodService ,private router: Router){
    activatedRoute.params.subscribe((params =>{
      if(params['id'])
      this.food  = foodService.getFoodById(params['id'])
    }))
  }
  cart(){
    this.router.navigateByUrl('cart-page')
  }
}
