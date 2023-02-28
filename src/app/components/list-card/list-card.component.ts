import { Component } from '@angular/core';

import { CardServiceService } from 'src/app/services/card-service.service'
import { Card } from 'src/app/models/card';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent {

  list:any=[];
  constructor(private Cardservice:CardServiceService,
              private toastr: ToastrService){

  }
  
  ngOnInit(){
    this.Cardservice.getCards().subscribe((data=>{
      //console.log(data)
      this.list={ data }
      console.log(this.list);
      this.showSuccess();
    }))
  }
  showSuccess() {
    this.toastr.success('Getting data from server!', 'Data Colletion found!');
  }
}
