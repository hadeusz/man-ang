import { MatchComponent } from './match/match.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamManagementComponent } from './team.management/team.management.component';


const routes: Routes = [
    { path: '', component: MatchComponent },
    { path: 'management', component: TeamManagementComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouters { }