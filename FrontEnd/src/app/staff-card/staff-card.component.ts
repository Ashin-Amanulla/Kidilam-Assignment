import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { StaffCollectionModel } from './staffmodel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-staff-card',
  templateUrl: './staff-card.component.html',
  styleUrls: ['./staff-card.component.css'
  ]
})
export class StaffCardComponent implements OnInit {

  Staffs: StaffCollectionModel[] = [];

  constructor(private StaffCollectionService: HeroService,
    private router: Router) { }

  ngOnInit(): void {
    this.StaffCollectionService.getStaffCollections().subscribe((data) => {
      this.Staffs = JSON.parse(JSON.stringify(data));

    });
}

}
