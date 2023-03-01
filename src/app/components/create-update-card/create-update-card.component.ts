import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'
import { Card } from 'src/app/models/card';
import { CardServiceService } from 'src/app/services/card-service.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-create-update-card',
  templateUrl: './create-update-card.component.html',
  styleUrls: ['./create-update-card.component.css']
})
export class CreateUpdateCardComponent implements OnInit,OnDestroy {

  form:FormGroup;
  subscription: any;
 //subscription:Subscription;
   card!: Card;
   _id:any; 
  title='';
  constructor(private fb:FormBuilder,
              private cardService:CardServiceService,
              private router:Router,
              private toastr:ToastrService,
              
              
              ){
    this.form=this.fb.group({
      id:0,
      userName:['',Validators.required],
      cardNumber:['',Validators.compose([Validators.required,Validators.minLength(16),Validators.maxLength(16)])] ,
      expirationDate:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5)])]
    })

  }
  ngOnInit():void{
    this.title=this.cardService._title;
    this.subscription = 
    this.cardService.getCard$().subscribe(data=>{
           console.log(data );
          this.card=data;
        this.form.patchValue({
        userName:this.card.userName,
        cardNumber:this.card.cardNUmber,
        expirationDate:this.card.expirationDate
        
        })
        this._id=this.card.id;
          if(this.card.id==undefined && this.cardService._title=='Update Card'){
            this.router.navigate(['/list']);
          }
      })
  }

 ngOnDestroy():void{
  this.subscription.unsubscribe();
 }

  updateCard(){
    const mycard:Card={
      id:this._id,
      userName:this.form.get('userName')?.value,
      cardNUmber:this.form.get('cardNumber')?.value,
      expirationDate:this.form.get('expirationDate')?.value
    };
    this.cardService.putCard(mycard).subscribe(data=>{
      this.toastr.info('Update Card','Card id : '+this._id);
    })

    this.goback();
  }

  saveCard(){
    console.log(this.form.value);
    if(this._id>0){
      this.updateCard();
    }else{
      const mycard:Card={
        id:0,
        userName:this.form.get('userName')?.value,
        cardNUmber:this.form.get('cardNumber')?.value,
        expirationDate:this.form.get('expirationDate')?.value
        
      }
      
  this.cardService.postCards(mycard).subscribe(data=>{
    console.log(data);
    this.toastr.success("New Card has been create","New Card!")
    this.goback();
  })
    }
  
      
  }

  goback(){
      this.router.navigate(['/list']);
  }

}
