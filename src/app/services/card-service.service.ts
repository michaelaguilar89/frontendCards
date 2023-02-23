import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
 private url='https://localhost:5001/api/Card';
 list:any;


  constructor(private http:HttpClient) { }

  getCards(){
    return this.http.get(this.url);
  }
  postCards(){
    
  }

}

