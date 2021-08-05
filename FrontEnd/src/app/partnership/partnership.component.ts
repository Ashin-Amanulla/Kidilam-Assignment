import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.css']
})
export class PartnershipComponent implements OnInit {

  constructor(    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  partnerForm(){
    this.router.navigate(['/partnerForm']);
  }

}
