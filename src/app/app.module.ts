import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateCardComponent } from './components/create-update-card/create-update-card.component';
import { ListCardComponent } from './components/list-card/list-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateCardComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
