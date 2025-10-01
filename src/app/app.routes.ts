import { Routes } from '@angular/router';
import { ExposantListComponent } from './component/exposant-list-component/exposant-list-component';
import { FestivalHomeComponent } from './component/festival-home-component/festival-home-component';

export const routes: Routes = [
    {path: 'exposants', component: ExposantListComponent},
    {path : '', component: FestivalHomeComponent}
];
