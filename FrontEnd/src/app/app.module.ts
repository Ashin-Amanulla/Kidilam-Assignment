import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EventsComponent } from './events/events.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { CoursesComponent } from './courses/courses.component';
import { WhyUsComponent } from './why-us/why-us.component';
import { PatronsComponent } from './patrons/patrons.component';
import { CourseMainComponent } from './course-main/course-main.component';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { AboutMainComponent } from './about-main/about-main.component';
import { OfferingsMainComponent } from './offerings-main/offerings-main.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { CategoryPipe } from './category.pipe';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { CorporateComponent } from './corporate/corporate.component';
import { AcademicComponent } from './academic/academic.component';
import { AcademicCardComponent } from './academic-card/academic-card.component';
import { CorporateCardComponent } from './corporate-card/corporate-card.component';
import { ListAboutComponent } from './list-about/list-about.component';
import { StaffCardComponent } from './staff-card/staff-card.component';
import { AboutPartnerComponent } from './about-partner/about-partner.component';
import { SingleCourseComponent } from './single-course/single-course.component';
import { BrochureFormComponent } from './brochure-form/brochure-form.component';
import { PartnershipFormComponent } from './partnership-form/partnership-form.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { CorporateFormComponent } from './corporate-form/corporate-form.component';
import { EventsPageComponent } from './events-page/events-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EventsComponent,
    FooterComponent,
    TestimonialsComponent,
    CoursesComponent,
    WhyUsComponent,
    PatronsComponent,
    CourseMainComponent,
    HeadNavComponent,
    AboutMainComponent,
    OfferingsMainComponent,
    SearchFilterPipe,
    CategoryPipe,
    CourseDetailsComponent,
    PartnershipComponent,
    CorporateComponent,
    AcademicComponent,
    AcademicCardComponent,
    CorporateCardComponent,
    ListAboutComponent,
    StaffCardComponent,
    AboutPartnerComponent,
    SingleCourseComponent,
    BrochureFormComponent,
    PartnershipFormComponent,
    CorporateFormComponent,
    EventsPageComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    AnimateOnScrollModule.forRoot(),
    HttpClientModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    NgbModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
