import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Card } from 'src/app/models/card';
import { CardServiceService } from 'src/app/services/card-service.service';


@Component({
  selector: 'app-get-by-id-remove-card',
  templateUrl: './get-by-id-remove-card.component.html',
  styleUrls: ['./get-by-id-remove-card.component.css']
})
export class GetByIdRemoveCardComponent implements OnInit{

  id:number=0;
  title:string='';
  card:any;
  constructor(private cardService:CardServiceService,
              private toastr:ToastrService ,
              private router:Router             ){

  }

  ngOnInit():void{
   
    this.id=this.cardService._id;
    this.title=this.cardService._title;
    console.log('id : '+this.id);
    if(this.title===''){
      this.goBack();
    }
 
    this.cardService.getByIdCard(this.id).subscribe((data=>{
      this.card=data
      console.log(this.card);
     
    }))
  
  }

  goBack(){
    this.router.navigate(['/list']);
  }
}
