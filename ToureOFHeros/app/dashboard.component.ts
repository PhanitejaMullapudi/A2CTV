import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { ApiSearvice } from './heroservice';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard-component.html'
})
export class DashboardComponent { 
   heroes: Hero[] = [];

  constructor(private heroService: ApiSearvice) { }

  ngOnInit(): void {
    this.heroService.getHeros()
      .subscribe(heroes => this.heroes = heroes);
  }
}
