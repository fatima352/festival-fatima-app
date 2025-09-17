import { Component, EventEmitter, Output } from '@angular/core';
import { Festival } from '../../interface/festival';
import { FestivalCard } from '../festival-card/festival-card'; 

@Component({
  selector: 'app-festival-list',
  standalone: true,
  imports: [FestivalCard],
  templateUrl: './festival-list.html',
  styleUrl: './festival-list.css'
})
export class FestivalList {
  festivals : Festival[] =[
    {name : "Fest1" , localisation : "Mtp", year : 2003},
    {name : "Fest2" , localisation : "Madrid", year : 2025},
    {name : "Fest3" , localisation : "Andalucia", year : 2014}
  ]


  public remove(name: string): void {
    this.festivals = this.festivals.filter(f => f.name !== name);
    console.log('supprimé:', name);
  }

  public addFestival(name: string, localisation: string, year: number){
    const festival: Festival = {name: name, localisation: localisation, year: year}
    return festival
  }
}
