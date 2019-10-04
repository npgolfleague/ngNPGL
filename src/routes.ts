import { TournamentsListComponent } from './app/tournaments/tournaments-list.component';
import { TournamentDetailsComponent } from './app/tournaments/tournament-details/tournament-details.component';
import { Routes } from '@angular/router'
import { CreateTournamentComponent } from './app/tournaments/shared/create-tournament.component';

export const appRoutes:Routes = [
    { path: 'tournaments' , component: TournamentsListComponent },
    { path: 'tournaments/new', component: CreateTournamentComponent },
    { path: 'tournaments/:id', component: TournamentDetailsComponent },
    { path: '', redirectTo: '/tournaments', pathMatch: 'full' }
]