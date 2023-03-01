import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateCardComponent } from './components/create-update-card/create-update-card.component';
import { CardServiceService } from './services/card-service.service';
import { ListCardComponent } from './components/list-card/list-card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

//
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { GetByIdRemoveCardComponent } from './components/get-by-id-remove-card/get-by-id-remove-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateCardComponent,
    ListCardComponent,
    HeaderComponent,
    FooterComponent,
    GetByIdRemoveCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,
    
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [CardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
