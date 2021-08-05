import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corporate-form',
  templateUrl: './corporate-form.component.html',
  styleUrls: ['./corporate-form.component.css',
    "../../assets/css/skeleton.css",
    "../../assets/css/normalize.css",]

})
export class CorporateFormComponent implements OnInit {

  categories = [
    'Providing experts for skill sessions',
     'Fresher hiring',
    'Internships',
    'Employee training in technologysoft skills',
    'Capstone Projects assistance',
  ];
    



  pvts = ['Public', 'Private', 'Quasi-Govt', 'PPP', 'Proprietorship']
  hires = ['1-10', '11-20', '21-30','31-40', '41-50']
  patents = ['1-10', "10>",'NA']




  corporate = {

    name: '',
    address: '',
    website: '',
    head: '',
    nature: '',
    typeof: '',
    identityNo: '',
    GST: '',
    date: '',
    nameofContact: '',
    phone: '',
    email: '',
    TechnicalSkill: '',
    employeeCount: '',
    hire: '',
    patents: '',
    collaborate: '',
    details: ''

  }



  constructor(private fb: FormBuilder,
    private CorporateForm: HeroService,
    private router: Router,
    private http: HttpClient
  ) { }

  addCorporateForm = this.fb.group(
    {

      name: ['', Validators.required],
      address: ['', Validators.required],
      website: ['', Validators.required],
      head: ['', Validators.required],
      nature: ['', Validators.required],
      typeof: ['', Validators.required],
      identityNo: ['', Validators.required],
      GST: ['', Validators.required],
      date: ['', Validators.required],
      nameofContact: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      TechnicalSkill: ['', Validators.required],
      employeeCount: ['', Validators.required],
      hire: ['', Validators.required],
      patents: ['', Validators.required],
      collaborate: ['', Validators.required],
      details: ['', Validators.required]

    }
  )




  addCorporate() {


    this.CorporateForm.newCorporate(this.corporate)
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



  ngOnInit() {
    
  }
}


