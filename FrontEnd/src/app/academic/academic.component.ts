import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.css']
})



export class AcademicComponent implements OnInit {

  constructor() { }

  partners=[
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/2560px-Salesforce.com_logo.svg.png",
"https://thycotic.com/wp-content/uploads/2020/09/automation_anywhere.png",
"https://www.freepnglogos.com/uploads/microsoft-logo-png-transparent-20.png",
"https://images.ctfassets.net/5965pury2lcm/1OVj4PfkzVc4Vrm3IuDdAP/f415d995e5a286ddb2644cabafeb9578/UiPath-og-image-orange.png",
"https://www.freepnglogos.com/uploads/vmware-png-logo/partners-login-vmware-png-logo-10.png",
"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-sva-scholarship-20.png"
  ]

  ngOnInit(): void {
  }
  title = 'IctakWeb';
  //faculty development programme counter variable
  facultydev: number = 0;
  fullstack: number = 0;
  salesforce: number = 0;
  microskills: number = 0;
  internship: number = 0;
  otherprog: number = 0;


  facultydevcountstop: any = setInterval(() => {
    this.facultydev++;
    //stoping the count
    if (this.facultydev == 647) {
      //stop the function
      clearInterval(this.facultydevcountstop);
    }
  }, 10)//every 10millisecond count will increase

  //fullstack count function
  fullstackcountstop: any = setInterval(() => {
    this.fullstack++;
    //stoping the count
    if (this.fullstack == 310) {
      //stop the function
      clearInterval(this.fullstackcountstop);
    }
  }, 10)

  //sales force count function
  salesforcecountstop: any = setInterval(() => {
    this.salesforce++;
    //stoping the count
    if (this.salesforce == 562) {
      //stop the function
      clearInterval(this.salesforcecountstop);
    }
  }, 10)

  //microskills count function
  microskillscountstop: any = setInterval(() => {
    this.microskills++;
    //stoping the count
    if (this.microskills == 346) {
      //stop the function
      clearInterval(this.microskillscountstop);
    }
  }, 10)

  //internship count function
  internshipcountstop: any = setInterval(() => {
    this.internship++;
    //stoping the count
    if (this.internship == 143) {
      //stop the function
      clearInterval(this.internshipcountstop);
    }
  }, 10)
  //otherprog count
  otherprogcountstop: any = setInterval(() => {
    this.otherprog++;
    //stoping the count
    if (this.otherprog == 432) {
      //stop the function
      clearInterval(this.otherprogcountstop);
    }
  }, 10)


  goToEx(){
    window.open('https://ictkerala.org/members/', "_blank");

  }
}
