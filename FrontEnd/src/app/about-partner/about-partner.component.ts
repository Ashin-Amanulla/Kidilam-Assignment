import { Component, OnInit } from '@angular/core';
import { PartnersModel } from '../patrons/partners';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-partner',
  templateUrl: './about-partner.component.html',
  styleUrls: ['./about-partner.component.css']
})


export class AboutPartnerComponent implements OnInit {

  partners: PartnersModel[] = [];


  constructor(
    private router: Router,
    private PartnerService: HeroService,
    
    ) { }


  ngOnInit(): void {


    this.PartnerService.getPartnerList().subscribe((data) => {
      this.partners = JSON.parse(JSON.stringify(data));

    })
  }
}

