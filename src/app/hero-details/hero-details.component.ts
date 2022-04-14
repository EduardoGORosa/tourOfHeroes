import { Component, Input } from "@angular/core";
import { Hero } from "../heroes/hero.model";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailComponent {
  @Input()
  hero?: Hero;
}
