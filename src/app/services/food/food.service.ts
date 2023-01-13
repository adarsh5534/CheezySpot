import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  

  constructor( private http:HttpClient) { }
  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;


  }
  getAllFoodByTag(tag:string):Foods[]{
    return tag =='All'?
    this.getAll():this.getAll().filter(food => food.tags?.includes(tag));
   
// you can write this staement is very simple type lets do it.

  }
  login(user:any,email:any,psw:any){
  
    const data={
      user,email,psw
    }
    return this.http.post('http://localhost:3001/login',data)
   
    
  }
 
  
  getAllTag():Tag[]{
    return[
      {name: 'All',count:14},
      {name: 'fastFood',count:6},
      {name: 'pizza',count:1},
      {name: 'lunch',count:8},
      {name: 'SlowFood',count:3},
      {name: 'Burger',count:1},
      {name: 'Fry',count:1},
      {name: 'Soup',count:0},
    ];
  }
  getAll():Foods[]{
return[   
  {
        id:1,
        name:'Chilli burger With Pepper Relish',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['america','mexico'],
        star:4.2,
        imageUrl:'/assets/food1.jpg',
        tags:['fastFood','slowFood','lunch'],

      },
      {

        id:2,
        name:'Perfect Lamb Satay Burger',
        cookTime:'10-20',
        price:10,
        favorite:true,
        origins:['india'],
        star:4.0,
        imageUrl:'/assets/food2.jpg',
        tags:['fastFood','lunch','Burger'],
      },
      {

        id:3,
        name:' Lamb and Tomato Stuffed Fries',
        cookTime:'10-20',
        price:12,
        favorite:false,
        origins:['india'],
        star:4.0,
        imageUrl:'/assets/food3.jpg',
        tags:['fastFood','SlowFood','lunch','Burger'],
      },
      {

        id:4,
        name:'Stuffed Bean Burger',
        cookTime:'10-20',
        price:5,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/food10.jpg',
        tags:['fastFood','lunch'],
      },
      {

        id:5,
        name:'Fried Chicken',
        cookTime:'10-20',
        price:10,
        favorite:false,
        origins:['india'],
        star:3.8,
        imageUrl:'/assets/food5.jpg',
        tags:['fastFood','SlowFood','lunch'],
      },
      {

        id:6,
        name:'Crunchy Chicken and Fish pizza',
      
        cookTime:'10-20',
        price:10,
        favorite:true,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/food6.jpg',
        tags:['pizza'],
      },
      {

        id:7,
        name:' Lamb Burger with Radish Slaw',
        cookTime:'10-20',
        price:9,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/food7.jpg',
        tags:['fastFood','Fry','lunch'],
      },
      {

        id:8,
        name:' Potato Corn Burger',
        cookTime:'10-20',
        price:17,
        favorite:false,
        origins:['belgium'],
        star:4.1,
        imageUrl:'/assets/food8.jpg',
        tags:['fastFood','lunch'],
      },
      {

        id:9,
        name:' Classic burgur',
        cookTime:'10-20',
        price:14,
        favorite:false,
        origins:['belgium'],
        star:4.1,
        imageUrl:'https://i.postimg.cc/D0VSh6RC/food21.webp',
        tags:['fastFood','lunch'],
      },
      {

        id:10,
        name:' Double Bacon Burgur',
        cookTime:'10-20',
        price:12,
        favorite:false,
        origins:['belgium'],
        star:4.1,
        imageUrl:'https://i.postimg.cc/fWt9ttK7/food23.webp',
        tags:['fastFood','lunch'],
      },
    
      {

        id:4,
        name:'French Fries',
        cookTime:'05-08',
        price:5,
        favorite:false,
        origins:['india'],
        star:4.5,
        imageUrl:'/assets/food4.jpg',
        tags:['fastFood','lunch'],
      },
]

  }
}