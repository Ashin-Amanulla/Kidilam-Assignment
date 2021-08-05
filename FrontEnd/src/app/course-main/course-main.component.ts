import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-course-main',
  templateUrl: './course-main.component.html',
  styleUrls: ['./course-main.component.css']
})


export class CourseMainComponent implements OnInit {

  Courses: any;
  categories = ['Retail', 'Institutional', 'Corporate', 'All'];
  popularCourses: any = [];
  public searchFilter: any = '';
  public category: any = '';
  query = '';
  querycategory = 'All';
  alertMsg: any = '';

  constructor(public courseObj: HeroService, private router: Router) { }

  ngOnInit(): void {

    this.alertMsg = localStorage.getItem('courseAlertMsg');
    this.courseObj.getCourses()
      .subscribe((courses) => {
        this.Courses = courses;
        for (let i = 0; i < this.Courses.length; i++) {
          console.log(`inside rating ${this.Courses[i].Rating}`);
          if (this.Courses[i].Rating >= 3) {
            console.log(`inside rating ${this.Courses[i].Rating}`);
            this.popularCourses.push(this.Courses[i]);
          }
        }
        localStorage.removeItem('courseAlertMsg');
        console.log(this.popularCourses);
      })


  }

  SearchClik() {
    alert('search');
  }

  getCourse(course: any) {
    localStorage.setItem("getCourseId", course._id.toString());
    this.router.navigate(['courseDetails']);
  };

  Register(course: any) {
    console.log('inside register');
    localStorage.setItem("CourseReg", course._id.toString());
    this.router.navigate(['courseregstrn']);
  };


}
