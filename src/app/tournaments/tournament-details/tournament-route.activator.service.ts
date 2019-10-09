import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TournamentService } from '../shared/tournament.service';

@Injectable()
export class TournamentRouteActivator implements CanActivate {
    constructor(private tournamentService:TournamentService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const tournamentExists = !!this.tournamentService.getTournament(+route.params['id'])

        if (!tournamentExists)
            this.router.navigate(['/404'])
        return tournamentExists
    }
}