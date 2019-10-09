import { TournamentsListComponent, 
    TournamentDetailsComponent, 
    TournamentListResolver, 
    CreateTournamentComponent, 
    TournamentRouteActivator} from './app/tournaments/index'
import { Routes } from "@angular/router"
import { Error404Component } from './app/errors/404.component';


export const appRoutes:Routes = [

{ path: 'tournaments/new', component: CreateTournamentComponent, canDeactivate: ['canDeactivateCreateTournament'] },
{ path: 'tournaments', component: TournamentsListComponent, resolve: {tournaments:TournamentListResolver} },
{ path: 'tournaments/:id', component: TournamentDetailsComponent, canActivate: [TournamentRouteActivator] },
{ path: '404', component: Error404Component },
{ path: '', redirectTo: '/tournaments', pathMatch: 'full'},
{ path: 'golfer', loadChildren: './golfer/golfer.module#GolferModule'},


]