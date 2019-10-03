import { Component, OnInit } from '@angular/core';
import { TournamentService } from './shared/tournament.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'tournaments-list',
    template: `
    <div>
        <h1>Upcoming Tournaments</h1>
        <hr>
        <div class="row">
            <div *ngFor="let tournament of tournaments" class="col-md-5">
                <tournament-thumbnail (click)="handleThumbnailClick(tournament.course)" [tournament]="tournament"></tournament-thumbnail>
            </div>
        </div>
    </div>
  `
})

export class TournamentsListComponent implements OnInit {
    tournaments:any[]

    constructor(private tournamentService: TournamentService, private toastr: ToastrService) {
        
    }

    ngOnInit(){
        this.tournaments = this.tournamentService.getTournaments()
    }

    handleThumbnailClick(tournamentCourse: any) {
        this.toastr.success(tournamentCourse)
    }
}