import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ApiSearvice } from './heroservice';


@Component({
    selector: 'my-hero-detail',
    templateUrl: `app/hero-detail.component.html`
})
export class HeroDetailComponent implements OnInit {
    hero: Hero;
    constructor(private heroService: ApiSearvice, private route: ActivatedRoute, private location: Location) {
    }
    ngOnInit() {
        this.route.params.switchMap((params: Params) => this.heroService.getHerosbyID(+params['id'])).subscribe(hero => this.hero = (hero != null && hero.length > 0) ? hero[0] : null);
    }
}
