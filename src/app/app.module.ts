import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TournamentsListComponent } from './tournaments/tournaments-list.component';
import { TournamentAppComponent } from './tournament-app.component';
import { TournamentThumbnailComponent } from './tournaments/tournament-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { TournamentService } from './tournaments/shared/tournament.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  declarations: [
    TournamentAppComponent,
    TournamentsListComponent,
    TournamentThumbnailComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TournamentService, ToastrService],
  bootstrap: [TournamentAppComponent]
})
export class AppModule { }
