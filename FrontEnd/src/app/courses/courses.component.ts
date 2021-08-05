import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  Courses: any;


  constructor(public courseObj: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.courseObj.getCourses()
      .subscribe((courses) => {
        this.Courses = courses;

      })
  }

  getCourse(Course: any) {
    localStorage.setItem("getCourseId", Course._id.toString());
    this.router.navigate(['courseDetails']);
  };

getCoursePage(){
  this.router.navigate(['courses']);

}

}
