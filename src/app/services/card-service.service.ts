import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models/card';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
 private url='https://localhost:5001/api/Card/';
 list:any;
 private updateForm= new BehaviorSubject<Card>({}as any);
 _title:string='Update Card';

  constructor(private http:HttpClient) { }

  setTitle(){
   
    return this._title;
  }
  getCards(){
    return this.http.get(this.url);
  }
  postCards(card:Card):Observable<Card>{
    return this.http.post<Card>(this.url,card);
  }
  update(element:Card){
    this.updateForm.next(element);
  }

  getCard$():Observable<Card>{
    return this.updateForm.asObservable();
  }

  putCard(card:Card):Observable<Card>{
    return this.http.put<Card>(this.url,card)
  }
  getByIdCard(id:number):Observable<Card>{
    return this.http.get<Card>(this.url+id)
  }

  removeCard(id:number){
    return this.http.delete<Card>(this.url+id);

  }

}

