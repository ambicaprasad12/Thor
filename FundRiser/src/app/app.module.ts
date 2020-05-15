import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonorListComponent } from './donor-list/donor-list.component';
import { AddFundsComponent } from './add-funds/add-funds.component';
import { UpdateFundsComponent } from './update-funds/update-funds.component';
import { FundDetailsComponent } from './fund-details/fund-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DonorListComponent,
    AddFundsComponent,
    UpdateFundsComponent,
    FundDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
