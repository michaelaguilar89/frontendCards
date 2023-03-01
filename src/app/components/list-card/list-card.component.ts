import { Component } from '@angular/core';

import { CardServiceService } from 'src/app/services/card-service.service'
import { Card } from 'src/app/models/card';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {

  list:any=[];
  constructor(private Cardservice:CardServiceService,
              private toastr: ToastrService,
              private router:Router){

  }
  
  ngOnInit(){
    try {
    
      this.Cardservice.getCards().subscribe((data=>{
        //console.log(data)
        this.list={ data }
        //console.log(this.list);
        this.showSuccess();
        console.log('length : '+this.list.data.result.length)
      })
      )
  } catch (error:any ) {
    this.toastr.error('Error ',error)
  }
  }
  showSuccess() {
    this.toastr.success('Getting data from server!', 'Data Colletion found!');
  }

  update(element:Card){
   this.Cardservice.update(element);
   this.Cardservice._title='Update Card';
   this.router.navigate(['/update']);

 
  }

  new(){
    this.Cardservice._title='Create New Card';
    this.router.navigate(['/create']);
  }
}
