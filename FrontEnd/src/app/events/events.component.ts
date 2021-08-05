import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css',
    // '../../../src/assets/css/templatemo-training-studio.css'
  ]
})
export class EventsComponent implements OnInit {
  Events: any;

  constructor(public EventService: HeroService, private router: Router) { }

  ngOnInit(): void {

    this.EventService.getEvents()
      .subscribe((events) => {
        this.Events = events;
      });



  }

}
