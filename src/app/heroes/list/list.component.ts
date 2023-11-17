import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroList = [ 'Ironman', 'Batman', 'Superman', 'Wonderman' ];
  public deletedHero?: string;

  addHero() {
    this.heroList.push('AguaMan');
  }

  removeLastHero(): void {
    this.deletedHero = this.heroList.pop();
  }

}
