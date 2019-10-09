import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { golferRoutes } from './golfer.routes'
import { ProfileComponent } from './profile.component';
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(golferRoutes)
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
        
    ],
    providers: [

    ]
})
export class GolferModule {

}