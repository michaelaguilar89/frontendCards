import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUpdateCardComponent } from './components/create-update-card/create-update-card.component';
import { GetByIdRemoveCardComponent } from './components/get-by-id-remove-card/get-by-id-remove-card.component';
import { ListCardComponent } from './components/list-card/list-card.component';

const routes: Routes = [
  {'path':'list',component:ListCardComponent},
  {'path':'create',component:CreateUpdateCardComponent},
  {'path':'update',component:CreateUpdateCardComponent},
  {'path':'getById',component:GetByIdRemoveCardComponent},
  {'path':'remove',component:GetByIdRemoveCardComponent},
  {'path':'',redirectTo:'list',pathMatch:'full'},
  {'path':'**',redirectTo:'list',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
