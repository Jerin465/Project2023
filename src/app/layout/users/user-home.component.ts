import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    templateUrl: './user-home.component.html',
    animations: [routerTransition()]

})
export class UserHomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
