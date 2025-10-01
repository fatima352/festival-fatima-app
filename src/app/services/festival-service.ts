import { Injectable, signal } from '@angular/core';
import { Festival } from '../interface/festival';

@Injectable({
  providedIn: 'root'
})
export class FestivalService {

  private readonly _festivales = signal<Festival[]>([
    {id : 1, name : "Fest1" , localisation : "Mtp", year : 2003},
    {id : 2, name : "Fest2" , localisation : "Madrid", year : 2025},
    {id : 3, name : "Fest3" , localisation : "Andalucia", year : 2014},
    {id : 4, name : "Fest4" , localisation : "Paris", year : 2020}
  ])

  readonly festivales = this._festivales.asReadonly()

  public add(name: string, localisation : string, year : number){
    const alreadyAdded = this._festivales().find((f)=> f.name === name && f.localisation === localisation && f.year === year)
    try{
      if(alreadyAdded === undefined){
        const id = this._festivales.length > 0 ? Math.max(...this._festivales().map( f => f.id || 0)) + 1 : 1
        const newfestival : Festival = {id : id , name : name, localisation: localisation , year : year}
        this._festivales.update(festivales => [...festivales, newfestival])
        console.log('Festivale ajouter avec succée')
      }
      console.log('Festivale déjà ajouter')
    }catch(error){
      console.log("Error lors de l'ajout", error)
    }

  }

  public delete(id : number){
    try{
      this._festivales.update(festivales => festivales.filter(f  => f.id == id))
      console.log("Festivale supprimée :", id)
    }catch(error){
      console.error("Erreur lors de la suppression :", error)
    }

  }

  public update(partial : Partial<Festival> &{id: number}) : void{
    this._festivales.update(list=>list.map(f => (f.id === partial.id ? {...f, ...partial} : f)))
    //fusioner avec partial
  }

  public findById(id : number){
     return this._festivales().find((f)=>f.id === id)
  }



  
}
