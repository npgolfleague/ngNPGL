import { Component, OnInit } from '@angular/core';
import { TournamentService } from './shared/tournament.service';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { ITournament } from './shared/tournament.model';

@Component({
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
    tournaments: ITournament[]

    constructor(private tournamentService: TournamentService, private toastr: ToastrService, private route:ActivatedRoute) {
        
    }

    ngOnInit(){
        this.tournaments = this.route.snapshot.data['tournaments']
    }

    handleThumbnailClick(tournamentCourse: any) {
        this.toastr.success(tournamentCourse)
    }
}