import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-counter-1',
    templateUrl: 'counter.component.html',
    styleUrls: []
})

export class Counter1Component implements OnInit {

    constructor() { }

    ngOnInit() {
        console.log('Contador iniciado');
    }

    counter = 0;

    increment() {
        this.counter++;
    }

    decrement() {
        this.counter++;
    }

    reset() {
        this.counter = 0;
    }
}