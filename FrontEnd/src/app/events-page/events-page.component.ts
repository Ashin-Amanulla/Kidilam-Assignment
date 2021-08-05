import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.css']
})
export class EventsPageComponent implements OnInit {

  Events: any;

  constructor(public EventService: HeroService, private router: Router) { }

  ngOnInit(): void {

    this.EventService.getEvents()
      .subscribe((events) => {
        this.Events = events;
      });

   

  }




}
