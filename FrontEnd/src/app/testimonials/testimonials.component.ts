import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { HeroService } from '../hero.service';
import { TestimonialModel } from './testimonialmodel';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'
    // '../../../src/assets/css/templatemo-training-studio.css'

]
})
export class TestimonialsComponent implements OnInit {

  testimonials: any;


  constructor(private hero :HeroService) { }

  ngOnInit(): void {
    this.hero.gettestimonialsF().subscribe((data) => {
      this.testimonials = data;
    })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplay :true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    // nav: true
  }
}



