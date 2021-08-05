import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
  group,query,stagger
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css',
    '../../../src/assets/css/templatemo-training-studio.css'

  ],
  animations: [
    trigger('goals', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])
  ]



})


export class HomePageComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private enquiry: HeroService,
    private router: Router,
    private http: HttpClient

  ) { }

  enquiryForm = {

    name: '',
    email: '',
    subject: '',
    message: ''
  }

  newenquiryForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]

    })


  newEnquiry() {


    this.enquiry.newEnquiry(this.enquiryForm)
      .subscribe(
        response => {
          if (response) {
            Swal.fire("Successfully Added", "", "success")
              .then(() => {
                this.router.navigate(['']);
              })
          }
          else {
            console.log("Network Error")
            Swal.fire("Network Error", "Please do after sometime ", "error")
              .then(() => {
                this.router.navigate(['/corporate-membership']);
              })

          }
        })
  }


  ngOnInit(): void {
  }

}
