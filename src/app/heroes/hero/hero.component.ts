import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string         = 'ironman';
  public age: number          = 34;

  // Los getters se usan como propiedades
  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`
  }

  changeName() {
    this.name = 'Spiderman';
  }

  changeAge() {
    this.age = 46;
  }

  reset() {
    this.name = 'ironman';
    this.age = 34;
  }

}
