import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent{
  hero: Hero = {
    id: 1,
    name: 'Homem Aranha',
  };

  heroes = HEROES;
}