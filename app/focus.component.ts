import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import { Focus } from './focus';
import { FocusService } from './focus.service';


@Component({
    selector: 'focus',
    templateUrl: 'app/focus.component.html',
    //styleUrls: ['app/heroes.component.css'],
    //directives: [HeroDetailComponent]
})
export class FocusComponent implements OnInit {
    focuses:Focus[];
    //selectedHero:Hero;

    constructor(
        private _router: Router,
        private _focusService: FocusService) { }

    getFocuses() {
        this._focusService.getFocuses().then(focuses => this.focuses = focuses);
    }

    ngOnInit() {
        this.getFocuses();
    }
    //
    //onSelect(hero:Hero) {
    //    this.selectedHero = hero;
    //}
    //
    //gotoDetail() {
    //    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    //}
}