import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HerosComponent } from './heroes.component';
import { ApiSearvice } from './heroservice';
import { DashboardComponent } from './dashboard.component'
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HerosComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],

  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HerosComponent,
  ],
  providers: [
    ApiSearvice
  ],

  bootstrap: [AppComponent],
})
export class AppModule { }



