import { Component, OnInit } from '@angular/core';
import{AdvService} from '../adv.service'
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent implements OnInit {
pro=[]
  constructor(private product:AdvService) { }

  ngOnInit() {
    this.product.getproduct().subscribe(product=>this.pro=product)
    //console.log(this.product.getproduct())
  }


}
