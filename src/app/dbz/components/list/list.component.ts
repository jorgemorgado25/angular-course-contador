import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'app-dbz-list',
    templateUrl: 'list.component.html'
})

export class ListComponent implements OnInit {
    
    @Output()
    onDeleteID: EventEmitter<number> = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    @Input()
    public characterList: Character[] = [
        { name: 'Personaje por defecto', power: 30 }
    ];

    deleteCharacter(idx: number): void {
        this.onDeleteID.emit(idx);
    }
}