
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonorListComponent } from './donor-list/donor-list.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { UpdateFundsComponent } from './update-funds/update-funds.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'funds', pathMatch: 'full' },
  { path: 'funds', component: DonorListComponent },
  { path: 'add', component: AddFundsComponent },
  { path: 'update/:id', component: UpdateFundsComponent },
  { path: 'details/:id', component: FundDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
