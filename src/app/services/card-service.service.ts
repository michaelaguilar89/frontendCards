import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
 private url='https://localhost:5001/api/Card/';
 list:any;


  constructor(private http:HttpClient) { }

  getCards(){
    return this.http.get(this.url);
  }
  postCards(card:Card):Observable<Card>{
    return this.http.post<Card>(this.url,card);

  }

}

