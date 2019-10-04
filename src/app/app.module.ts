import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TournamentsListComponent } from './tournaments/tournaments-list.component';
import { TournamentAppComponent } from './tournament-app.component';
import { TournamentThumbnailComponent } from './tournaments/tournament-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { TournamentService } from './tournaments/shared/tournament.service';
import { ToastrService } from './common/toastr.service';
import { TournamentDetailsComponent } from './tournaments/tournament-details/tournament-details.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { CreateTournamentComponent } from './tournaments/shared/create-tournament.component';

@NgModule({
  declarations: [
    TournamentAppComponent,
    TournamentsListComponent,
    TournamentThumbnailComponent,
    TournamentDetailsComponent,
    CreateTournamentComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TournamentService, ToastrService],
  bootstrap: [TournamentAppComponent]
})
export class AppModule { }
