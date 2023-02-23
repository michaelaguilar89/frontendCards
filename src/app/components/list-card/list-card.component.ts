import { Component } from '@angular/core';

import { CardServiceService } from 'src/app/services/card-service.service'
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {

  list:any=[];
  constructor(private Cardservice:CardServiceService){

  }
  
  ngOnInit(){
    this.Cardservice.getCards().subscribe((data=>{
      //console.log(data)
      this.list={ data }
      console.log(this.list);
    }))
  }
}
