import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'
import { IMemberTeam } from './member';
@Injectable({
  providedIn: 'root'
})
export class AdvService {
  url="   http://localhost:3000/teemMember"
 
  constructor( private http:HttpClient) { 

  }

  getMember(): Observable<IMemberTeam[]>{
    
    return this.http.get<IMemberTeam[]>(this.url)
    
  }
  // addMember(obj){
    
  //   return this.http.post<IMemberTeam[]>(this.url,obj);
  //   console.log(obj);
  // }
}
