import { Component, Input } from '@angular/core';

@Component({
    selector: 'tournament-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{tournament.league}}</h2>
        <div>Date: {{tournament.date}} </div>
        <div>Time: {{tournament.time}} </div>
        <div>Course: {{tournament.course}} </div>
    </div>
  `
})
export class TournamentThumbnailComponent {
    @Input() tournament: any
}