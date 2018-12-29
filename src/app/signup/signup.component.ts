import { Component, OnInit } from '@angular/core';
import {AdvService} from '../adv.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
teamMember=[];
public name=" ";
  constructor( private _advService:AdvService) { }

  ngOnInit() {
    //let obj={ name:this.name,price:this.price,quantity:this.quantity}
    //this._advService.addTeamMember().subscribe(data=>this.teamMember=data)
    
  }

}
