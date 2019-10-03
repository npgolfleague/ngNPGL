import { TournamentsListComponent } from './app/tournaments/tournaments-list.component';
import { TournamentDetailsComponent } from './app/tournaments/tournament-details/tournament-details.component';
import { Routes } from '@angular/router'

export const appRoutes:Routes = [
    { path: 'tournaments' , component: TournamentsListComponent },
    { path: 'tournaments/:id', component: TournamentDetailsComponent },
    { path: '', redirectTo: '/tournaments', pathMatch: 'full' }
]