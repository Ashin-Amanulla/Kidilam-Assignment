import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PartnersModel } from './partners';
import { Router } from '@angular/router';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-patrons',
  templateUrl: './patrons.component.html',
  styleUrls: ['./patrons.component.css']
})

export class PatronsComponent implements OnInit {

  partners: PartnersModel[] = [];


  constructor(
    private router: Router,
    private PartnerService: HeroService,
    ) { }

  ngOnInit(): void {
    

    this.PartnerService.getPartnerList().subscribe((data)=>{
      this.partners=JSON.parse(JSON.stringify(data));
          })
  }

  
  

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },

  }
}