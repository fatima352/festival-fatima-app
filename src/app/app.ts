import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FestivalList } from "./component/festival-list/festival-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FestivalList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('festival-fatima-app');
}
