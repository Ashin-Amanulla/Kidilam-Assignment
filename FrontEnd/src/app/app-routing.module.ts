import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMainComponent } from './about-main/about-main.component';
import { CourseMainComponent } from './course-main/course-main.component';
import { HomePageComponent } from './home-page/home-page.component';
import { OfferingsMainComponent } from './offerings-main/offerings-main.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { CorporateComponent } from './corporate/corporate.component';
import { AcademicComponent } from './academic/academic.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { BrochureFormComponent } from './brochure-form/brochure-form.component';
import { PartnershipFormComponent } from './partnership-form/partnership-form.component';
import { CorporateFormComponent } from './corporate-form/corporate-form.component';
import { EventsPageComponent } from './events-page/events-page.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent
  },
  {
    path: 'courses', component: CourseMainComponent
  },
  {
    path: 'offerings', component: OfferingsMainComponent
  },
  {
    path: 'about', component: AboutMainComponent
    // path: 'about', component: CourseDetailsComponent
  },
  {
    path: 'courseDetails', component: SingleCourseComponent
  },
  {
    path: 'partnership', component: PartnershipComponent
  },
  {
    path: 'corporate-membership', component: CorporateComponent
  },
  {
    path: 'academic-membership', component: AcademicComponent
  },
  {
    path: 'courseregstrn', component: BrochureFormComponent
  },
  {
    path: 'partnerForm', component: PartnershipFormComponent
  },
  {
    path: 'corporateForm', component: CorporateFormComponent
  },
  {
    path: 'events', component: EventsPageComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
