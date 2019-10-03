import { Component } from '@angular/core';

@Component({
  selector: 'tournament-app',
  template: `
      <nav-bar></nav-bar>
      <router-outlet></router-outlet>
      `
})
export class TournamentAppComponent {
  title = 'ngNPGL';
}
