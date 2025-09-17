import { Component, input, output } from '@angular/core';
import { Festival } from '../../interface/festival';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-festival-card',
  imports: [MatCardModule],
  templateUrl: './festival-card.html',
  styleUrl: './festival-card.css'
})
export class FestivalCard {
  public festival = input<Festival>();
  public remove = output<string>();
  public add = output<Festival>();
  
  // public currentYear = new Date().getFullYear; faux car je stock la fonction elle meme pas le resultat
  public currentYear = new Date().getFullYear();

}
