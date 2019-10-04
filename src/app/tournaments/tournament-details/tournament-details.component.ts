import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../shared/tournament.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './tournament-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .tournament-image { height: 100px }
    `]
})
export class TournamentDetailsComponent implements OnInit{
    tournament:any
    constructor(private tournamentService:TournamentService, private route:ActivatedRoute) {

    }

    ngOnInit() {
        this.tournament = this.tournamentService.getTournament(+this.route.snapshot.params['id'])
    }

}