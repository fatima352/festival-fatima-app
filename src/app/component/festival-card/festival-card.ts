import { Component, input, output, inject } from '@angular/core';
import { Festival } from '../../interface/festival';
import {MatCardModule} from '@angular/material/card';
import { FestivalService } from '../../services/festival-service';


@Component({
  selector: 'app-festival-card',
  imports: [MatCardModule],
  templateUrl: './festival-card.html',
  styleUrl: './festival-card.css'
})
export class FestivalCard {
  // private servicefestival = inject(FestivalService);
  public festival = input<Festival>();
  public delete = output<number>();
  
  // public currentYear = new Date().getFullYear; faux car je stock la fonction elle meme pas le resultat
  public currentYear = new Date().getFullYear();

}
