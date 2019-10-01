import { Component, OnInit } from '@angular/core';
import { TournamentService } from './shared/tournament.service';


@Component({
    selector: 'tournaments-list',
    template: `
    <div>
        <h1>Upcoming Tournaments</h1>
        <hr>
        <div class="row">
            <div *ngFor="let tournament of tournaments" class="col-md-5">
                <tournament-thumbnail [tournament]="tournament"> </tournament-thumbnail>
            </div>
        </div>
    </div>
  `
})

export class TournamentsListComponent implements OnInit {
    tournaments:any[]

    constructor(private tournamentService: TournamentService) {
        
    }

    ngOnInit(){
        this.tournaments = this.tournamentService.getTournaments()
    }
}