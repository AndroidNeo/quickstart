/**
 * Created by artur on 17.04.16.
 */

import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import {DashboardComponent} from "./dashboard.component";
@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        HeroService
    ]
})
@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },

    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    }

])
export class AppComponent {
    title = 'Tour of Heroes';
}