import { Component, OnInit } from '@angular/core';
import { Funds } from '../funds';
import { Router, ActivatedRoute } from '@angular/router';
import { FundsServiceService } from '../funds-service.service';

@Component({
  selector: 'app-fund-details',
  templateUrl: './fund-details.component.html',
  styleUrls: ['./fund-details.component.css']
})
export class FundDetailsComponent implements OnInit {
  id: number;
  funds:Funds;
  constructor(private route: ActivatedRoute,private router: Router,
    private fundService: FundsServiceService) { }

  ngOnInit(): void {
    this.funds = new Funds();

    this.id = this.route.snapshot.params['id'];
    
    this.fundService.getFunds(this.id)
      .subscribe(data => {
        console.log(data)
        this.funds = data;
      }, error => console.log(error));
  }
  list(){
    this.router.navigate(['funds']);
  }
}
