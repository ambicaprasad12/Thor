import { Component, OnInit } from '@angular/core';
import { Funds } from '../funds';
import { FundsServiceService } from '../funds-service.service';
import { ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-update-funds',
  templateUrl: './update-funds.component.html',
  styleUrls: ['./update-funds.component.css']
})
export class UpdateFundsComponent implements OnInit {
  id: number;
  funds:Funds;
  constructor(private route: ActivatedRoute,private router: Router,
    private fundService: FundsServiceService) { }

  ngOnInit(): void {
    this.funds = new Funds();
    this.id=this.route.snapshot.params['id'];
    this.fundService.getFunds(this.id)
    .subscribe(data => {
      console.log(data)
      this.funds = data;
    }, error => console.log(error));
  }
  updateFunds() {
    this.fundService.updateFunds(this.id, this.funds)
      .subscribe(data => console.log(data), error => console.log(error));
    this.funds = new Funds();
    this.gotoList();
  } 
  onSubmit() {
    this.updateFunds();    
  }
  gotoList() {
    this.router.navigate(['/funds']);
  }
}
