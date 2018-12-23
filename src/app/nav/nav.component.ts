import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 department=[{"id":1 , "name":"home"},
   {"id":1 , "name":"work"},
 {"id":1 , "name":"about"},
 {"id":1 , "name":"team"},
 {"id":1 , "name":"protofolio"},
 {"id":1 , "name":"price"},
 {"id":1 , "name":"contact "},
]
;
isActive =true;

  constructor() { }
 
  ngOnInit() {
  }

}
