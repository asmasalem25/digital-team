import { Component, OnInit } from '@angular/core';
import {AdvService} from '../adv.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

teamMembers=[];
  
  //nameErrors
    constructor(private  _AdvService:AdvService) { }
  
    ngOnInit() {
  
    }
    login(){
      this._AdvService.getMember().subscribe(data=>this.teamMembers=data);
    }
    // addProduct(){ 
    //   let obj={ name:this.name,price:this.price,quantity:this.quantity}
    //   // this.products.push(obj);
    //   //this.product.addProduct(obj).subscribe(pro=>console.log(pro));
  
    //   this.name="";
    //   this.quantity="";
    //   this.price=""
    // }
    // addNew(myForm){
    //   console.log(myForm.value,"myForm");
    //   /*let Errors= myForm.controls.name.Errors
    //   console.log(Errors)
    //   this.nameErrors=Errors.required? 'you should fill the input ':null
    //   if(Errors.minlength){
    //     this.nameErrors=`u enter ${Errors.minlength.actuallength} should have ${Errors.minlength.requiredLength}`
    //    */ 
    //   }

    }
  
