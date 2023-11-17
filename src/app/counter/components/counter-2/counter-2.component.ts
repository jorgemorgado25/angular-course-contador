import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter-2',
    templateUrl: 'counter-2.component.html',
    styleUrls: [ 'counter-2.component.css' ]
})
export class Counter2Component implements OnInit {

    initialValue: number = 10;
    counter: number = this.initialValue;

    constructor() { }

    ngOnInit() { }

    increment(value: number) {
        this.counter = this.counter + value
    }

    decrement(value: number) {
        this.counter = this.counter - value;
    }

    reset() {
        this.counter = this.initialValue;
    }
}