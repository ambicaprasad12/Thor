import { Component, OnInit } from '@angular/core';
import { Funds } from '../funds';
import { FundsServiceService } from '../funds-service.service';
import { Router} from '@angular/router';
@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.css']
})
export class AddFundsComponent implements OnInit {
   funds:Funds=new Funds();
   submitted=false;
  constructor(private fundService:FundsServiceService, private router:Router) { }

  ngOnInit(): void {
  }
newFunds(): void {
  this.submitted = false;
  this.funds=new Funds();
}
 
save() {
  this.fundService.createFunds(this.funds)
      .subscribe(data => console.log(data), error => console.log(error));
    this.funds = new Funds();
    this.gotoList();
}
  onSubmit() {
    this.submitted=true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/funds']);
  }
  
}
