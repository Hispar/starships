import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES, Router} from 'angular2/router';


@Component({
    selector: 'dropdown',
    template: `<div class="dropdown-menu">
                <a class="dropdown-item" *ngFor="#link of links" [routerLink]="[link.url]">{{link.title}}</a>
               </div>`,
    directives: [ROUTER_DIRECTIVES],
})
export class DropDownComponent {
    router:Router;
    @Input()
        links = [];

    constructor(data:Router) {
        this.router = data;
    }
}