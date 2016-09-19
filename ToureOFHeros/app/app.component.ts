import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `<div class="row">
  <div class="col-sm-12">
    <ul class="list-group" (drop)="drop($event)" (dragover)="allowDrop($event)">Hellow
      <li class="list-group-item" *ngFor="let hero of heros" (click)="onSelect(hero)" draggable="true" (dragstart)="drag($event)" [id]="'Developer_'+hero.id">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  </div>
</div>
<div class="row" *ngIf="selectedHero">
  <div class="col-sm-12">
    <div class="row">
      <div class="col-sm-12">
        &nbsp;
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="">
          <div class="form-group">
            <label for="txtID" class="control-label">ID</label>
              <input type="text" class="form-control"  [(ngModel)]="selectedHero.id" placeholder="ID" disabled="disabled">
          </div>
          <div class="form-group">
            <label for="txtName" class="control-label">Name</label>
              <input type="text" [(ngModel)]="selectedHero.name" class="form-control"  placeholder="Name">
          </div>
        </div>
      </div>
    </div>
  </div>
</div> `
})




export class AppComponent {
  title = 'Tour of Developers';
  heros = HEROES;
  selectedHero: Hero;

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
export class Hero {
  id: number;
  name: string;
}
const HEROES: Hero[] = [
  { id: 11, name: 'Phaniteja Mullapudi' },
  { id: 12, name: 'Phani Movva' },
  { id: 13, name: 'Hari Prathipati' },
  { id: 14, name: 'Bhavani mupparaju' },
  { id: 15, name: 'Rachana Gopanaboina' },
  { id: 16, name: 'Krishna Murthi Jampana' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

