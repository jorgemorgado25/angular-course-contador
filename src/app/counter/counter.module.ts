import { NgModule } from '@angular/core';
import { Counter1Component } from './components/counter-1/counter.component';
import { Counter2Component } from './components/counter-2/counter-2.component';

@NgModule({
    declarations: [
        Counter1Component,
        Counter2Component
    ],
    exports: [
        Counter1Component,
        Counter2Component
    ]
})
export class CounterModule {}