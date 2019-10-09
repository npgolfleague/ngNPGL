import { Component, Input } from '@angular/core';
import { ITournament } from './shared/tournament.model';

@Component({
    selector: 'tournament-thumbnail',
    template: `
        <div [routerLink]="['/tournaments' , tournament.id]" class="well hoverwell thumbnail">
            <h2>{{tournament?.league}}</h2>
            <div>Date: {{tournament?.date}} </div>
            <div>Time: {{tournament?.time}} </div>
            <div>Course: {{tournament?.course}} </div>
        </div>
    `,
    styles: [`
        .thumbnail {min-hieght: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color #bbb;}
        `]
})
export class TournamentThumbnailComponent {
    @Input() tournament: ITournament
    getStartTimeStyle():any {
        if (this.tournament && this.tournament.time === '8:00 am')
            return { color: '#003300', 'font-weight': 'bold'}
        return { }
    }
}