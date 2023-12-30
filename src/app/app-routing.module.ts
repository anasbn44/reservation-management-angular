import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RessourceComponent} from "./ressource/ressource.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {AuthGuard} from "./guards/auth.guard";
import {PersonComponent} from "./person/person.component";
import {NewReservationComponent} from "./new-reservation/new-reservation.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: HomeComponent },
  { path: 'resource', component: RessourceComponent, canActivate:[AuthGuard]},
  // { path: 'newReservation', component: NewReservationComponent, canActivate:[AuthGuard]},
  { path: 'reservation', component: ReservationComponent, canActivate:[AuthGuard],data:{roles:['ADMIN']}},
  { path: 'users', component: PersonComponent, canActivate:[AuthGuard],data:{roles:['ADMIN']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
