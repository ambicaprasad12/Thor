import { Component, OnInit } from '@angular/core';
import { Funds } from '../funds';
import { Observable } from 'rxjs';
import { Router} from '@angular/router';
import { FundsServiceService } from '../funds-service.service';




@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
funds:Observable<Funds[]>;
  constructor(private fundService:FundsServiceService, private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.funds = this.fundService.getFundsList();
  }
deleteFunds(id:number) {
  this.fundService.deleteFunds(id).subscribe(data => {
    console.log(data);
    this.reloadData(); 
  } , error =>console.log(error));
}
fundDetails(id:number) {
  this.router.navigate(['details',id]);
}
updateFunds(id:number) {
  this.router.navigate(['update',id]);
}
}
