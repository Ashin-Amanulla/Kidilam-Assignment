import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partnership-form',
  templateUrl: './partnership-form.component.html',
  styleUrls: ['./partnership-form.component.css',
  "../../assets/css/skeleton.css",
  "../../assets/css/normalize.css",]
})
export class PartnershipFormComponent implements OnInit {


  partner = {
    name: '',
    email: '',
    phone: '',
    firm: '',
    address: '',
    district: '',
    officeSpace: '',
    report: '',
    expect: '',
    profile: '',
    employeeCount: ''
  }




  constructor(private fb: FormBuilder,
    private PartnershipForm: HeroService,
    private router: Router,
    private http: HttpClient
  ) { }

  addPartnerForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      firm: ['', Validators.required],
      address: ['', Validators.required],
      district: ['', Validators.required],
      officeSpace: ['', Validators.required],
      report: ['', Validators.required],
      expect: ['', Validators.required],
      profile: ['', Validators.required],
      employeeCount: ['', Validators.required]

    }
  )

  



  addPartner() {

    
    
    this.PartnershipForm.newPartner(this.partner)
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
                this.router.navigate(['/partnership']);
              })

          }
        })
  }

  ngOnInit(): void {
  }

}
