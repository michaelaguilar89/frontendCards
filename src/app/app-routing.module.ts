import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateCardComponent } from './components/create-update-card/create-update-card.component';
import { ListCardComponent } from './components/list-card/list-card.component';

const routes: Routes = [
  {'path':'list',component:ListCardComponent},
  {'path':'create',component:CreateUpdateCardComponent},
  {'path':'update',component:CreateUpdateCardComponent},
  {'path':'',redirectTo:'list',pathMatch:'full'},
  {'path':'**',redirectTo:'list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
