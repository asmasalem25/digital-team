import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AdvService {
  url="  http://localhost:3000/teamName"
  pro=[]
  constructor( private http:HttpClient) { 

  }

  getproduct(): Observable<[]>{
    
    return this.http.get<[]>(this.url)
    
  }
  addProduct(obj){
    return this.http.post<[]>(this.url,obj);
    console.log(obj);
  }
}
