import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-create-update-card',
  templateUrl: './create-update-card.component.html',
  styleUrls: ['./create-update-card.component.css']
})
export class CreateUpdateCardComponent {

  form:FormGroup;

  constructor(private fb:FormBuilder){
    this.form=this.fb.group({
      id:0,
      userName:['',Validators.required],
      cardNumber:['',Validators.compose([Validators.required,Validators.minLength(16),Validators.maxLength(16)])] ,
      expirationDate:['',Validators.compose([Validators.required,Validators.minLength(5),Validators.maxLength(5)])]
    })

  }
  ngOnInit():void{

  }

  saveCard(){
    console.log(this.form.value);
  }

}
