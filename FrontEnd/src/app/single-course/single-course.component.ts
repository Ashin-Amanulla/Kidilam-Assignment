import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute,Router } from '@angular/router';  
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.css',
  ]
})
export class SingleCourseComponent implements OnInit {
  course: any;
  testimonals: any;
  images = [
    { title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500" },
    { title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500" },
    { title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500" },
    { title: 'First Slide', short: 'First Slide Short', src: "https://picsum.photos/id/700/900/500" },
    { title: 'Second Slide', short: 'Second Slide Short', src: "https://picsum.photos/id/1011/900/500" },
    { title: 'Third Slide', short: 'Third Slide Short', src: "https://picsum.photos/id/984/900/500" }
  ];

  data = [
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img1.jpg", title: "Slide 1" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img2.jpg", title: "Slide 2" },
    { img: "https://therichpost.com/wp-content/uploads/2021/05/bootstrap5-carousel-slider-img3.jpg", title: "Slide 3" }
  ];

  fileUrl: any;

  url: any;

  constructor(public courseObj: HeroService, config: NgbCarouselConfig, private sanitizer: DomSanitizer, private router: Router) {
    config.interval = 0;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  ngOnInit(): void {
    let CourseId = localStorage.getItem("getCourseId");
    this.courseObj.getCourse(CourseId)
      .subscribe((courseItem) => {
        this.course = courseItem;
        console.log(this.course);
      });
    this.courseObj.getTestimonials(CourseId)
      .subscribe((TestimonalItems) => {
        this.testimonals = TestimonalItems;
        console.log(this.testimonals);
      });
  }

  public download(): void {
    window.open('assets/documents/Sample_Question-Paper.pdf', '_blank');
  }

  Register(course: any) {
    console.log('inside register');
    localStorage.setItem("CourseReg", course._id.toString());
    this.router.navigate(['courseregstrn']);
  };


}
