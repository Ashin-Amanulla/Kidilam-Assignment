import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {
  
  partners=[
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
"https://thycotic.com/wp-content/uploads/2020/09/automation_anywhere.png",
"https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-20.png",
"https://images.ctfassets.net/5965pury2lcm/1OVj4PfkzVc4Vrm3IuDdAP/f415d995e5a286ddb2644cabafeb9578/UiPath-og-image-orange.png",
"https://www.freepnglogos.com/uploads/vmware-png-logo/partners-login-vmware-png-logo-10.png",
"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
  ]

  constructor( private router: Router) { }

  corporateForm(){
    this.router.navigate(['/corporateForm']);
  }

  ngOnInit(): void {
  }
  // counter variable

  roboticpro: number = 0;
  fullstack: number = 0;
  datascience: number = 0;
  digitalmark: number = 0;

  roboticprocountstop: any = setInterval(() => {
    this.roboticpro++;
    //stopping the count
    if (this.roboticpro == 89) {
      //stop the function
      clearInterval(this.roboticprocountstop);
    }
  }, 10)//every 10millisecond count will increase

  fullstackcountstop: any = setInterval(() => {
    this.fullstack++;
    //stopping the count
    if (this.fullstack == 232) {
      //stop the function
      clearInterval(this.fullstackcountstop);
    }
  }, 10)//every 10millisecond count will increase

  datasciencecountstop: any = setInterval(() => {
    this.datascience++;
    //stopping the count
    if (this.datascience == 253) {
      //stop the function
      clearInterval(this.datasciencecountstop);
    }
  }, 10)//every 10millisecond count will increase

  digitalmarkcountstop: any = setInterval(() => {
    this.digitalmark++;
    //stopping the count
    if (this.digitalmark == 63) {
      //stop the function
      clearInterval(this.digitalmarkcountstop);
    }
  }, 10)//every 10millisecond count will increase
}
