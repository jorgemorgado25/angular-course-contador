import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class DbzComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

    public characters: Character[] = [
        { name: 'Personaje 1', power: 500 },
        { name: 'Personaje 2', power: 720 },
        { name: 'Personaje 3', power: 155 },
    ];

    listenNewCharacter(character: Character): void {
        this.characters.push(character);
    }
}