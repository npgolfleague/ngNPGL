import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TournamentsListComponent,
         TournamentThumbnailComponent,
         TournamentDetailsComponent,
         CreateTournamentComponent,
         TournamentRouteActivator,
         TournamentListResolver,
         TournamentService} from './tournaments/index';
import { TournamentAppComponent } from './tournament-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';
import { Error404Component } from './errors/404.component';
import { componentFactoryName } from '@angular/compiler';

@NgModule({
  declarations: [
    TournamentAppComponent,
    TournamentsListComponent,
    TournamentThumbnailComponent,
    TournamentDetailsComponent,
    CreateTournamentComponent,
    Error404Component,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TournamentService, 
    TournamentListResolver,
    ToastrService, 
    TournamentRouteActivator,
    {
      provide: 'canDeactivateCreateTournament',
      useValue: checkDirtyState

    }],
  bootstrap: [TournamentAppComponent]
})
export class AppModule { }


export function checkDirtyState(component:CreateTournamentComponent){
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}