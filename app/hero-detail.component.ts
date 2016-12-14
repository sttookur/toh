import { Component, Input } from '@angular/core';
import { Hero } from '@angular/core';

@Component({
    selector: 'my-hero-detail',
    templateUrl: './hero-detail.component.html',
})

export class HeroDetailComponent {

    hero: Hero;

}