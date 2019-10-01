import { Component } from '@angular/core';


@Component({
    selector: 'tournaments-list',
    template: `
    <div>
        <h1>Upcoming Tournaments</h1>
        <hr>
        <tournament-thumbnail [tournament]="tournament1"> </tournament-thumbnail>
    </div>
  `
})

export class TournamentsListComponent {

    tournament1 = {
        id: 1,
        league: 'NPGL',
        date: '09/26/20',
        time: '05:30 pm',
        course: 'Eagles Forest'
    }

}