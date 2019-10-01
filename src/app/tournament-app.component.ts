import { Component } from '@angular/core';

@Component({
  selector: 'tournament-app',
  template: `
      <nav-bar></nav-bar>
      <tournaments-list></tournaments-list>
      `
})
export class TournamentAppComponent {
  title = 'ngNPGL';
}
