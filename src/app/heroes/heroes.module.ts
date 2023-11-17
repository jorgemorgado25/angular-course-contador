import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";

@NgModule({
    imports: [
        CommonModule // Para tener las directivas en los componentes, ngIf, ngFor, etc
    ],
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        HeroComponent,
        ListComponent
    ]
})
export class HeroesModule {}