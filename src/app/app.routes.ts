import { Routes } from '@angular/router';
import { ExposantListComponent } from './component/exposant-list-component/exposant-list-component';
import { FestivalHomeComponent } from './component/festival-home-component/festival-home-component';
import { FestivalList } from './component/festival-list/festival-list';

export const routes: Routes = [
    {path: 'exposants', component: ExposantListComponent},
    {path : '', component: FestivalHomeComponent},
    {path:'festivals', component: FestivalList }
];
