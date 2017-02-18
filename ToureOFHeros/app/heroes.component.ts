import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ApiSearvice } from './heroservice'

@Component({
    selector: 'my-heroes',
    templateUrl : `app/heros-component.html`
})
export class HerosComponent implements OnInit {

    heros: Hero[];
    selectedHero: Hero;

    constructor(private service: ApiSearvice) { }

    ngOnInit() {
        this.service.getHeros().subscribe(data => { this.heros = data; console.log(this.heros); });
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
        console.log(ev.target);
    }
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    allowDrop(ev) {
        ev.preventDefault();
    }

}