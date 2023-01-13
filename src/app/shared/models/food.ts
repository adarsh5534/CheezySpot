export class Foods{
    id!:number; // ! used insted of using constructor
    price!:number;
    name!:string;
    favorite:boolean=false;
    star:number=0; // if value is defined then no need  of !
    tags?:string[];
    imageUrl!:string;
    cookTime!:string;
    origins!:string[];

}