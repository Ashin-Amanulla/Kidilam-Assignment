import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {



  constructor(private http: HttpClient) { }
  server_address :string ='/api';
  // server_address: string = 'http://localhost:8887';


  getPartnerList() {

    return this.http.get(`${this.server_address}/partners`)
  }

  getCourses() {
    return this.http.get(`${this.server_address}/CourseList`)
  };

  getCourse(id: any) {
    return this.http.get(`${this.server_address}/Course/` + id)
  };

  getTestimonials(id: any) {
    return this.http.get(`${this.server_address}/CourseTestimony/` + id);
  };

  courseRegistration(courseReg: any) {
    return this.http.post<any>(`${this.server_address}/registercourse`, courseReg)
  }

  newPartner(item: any) {
    console.log("hero service", item)
    return this.http.post(`${this.server_address}/PartnershipApplication`, { "partner": item })
  }

  newCorporate(item: any) {
    console.log("hero service", item)
    return this.http.post(`${this.server_address}/CorporateApplication`, { "corporate": item })
  }

  newEnquiry(item: any) {
    console.log("hero service", item)
    return this.http.post(`${this.server_address}/EnquiryApplication`, { "enquiry": item })
  }

  getStaffCollections() {
    return this.http.get(`${this.server_address}/about/staff`)
  }

  getEvents() {
    return this.http.get(`${this.server_address}/EventList`)
  };

  gettestimonialsF() {
    return this.http.get(`${this.server_address}/testimonials/testy`)
  }

}
