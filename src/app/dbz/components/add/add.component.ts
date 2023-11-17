import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
@Component({
    selector: 'app-dbz-add-character',
    templateUrl: 'add.component.html'
})

export class AddComponent implements OnInit {

    @Output()
    onNewCharacter: EventEmitter<Character> = new EventEmitter();
    
    constructor() { }

    ngOnInit() { }

    character: Character = {
        name: '',
        power: 0
    }

    emitCharacter() {
        this.onNewCharacter.emit({ ...this.character });
        this.character.name  = '';
        this.character.power = 0
    }
}