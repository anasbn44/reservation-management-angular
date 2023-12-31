import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent {
  reservation:any;
  reservationById:any;
  editRes:any|null;
  page:number = 1;
  resource:any|null;
  constructor(private http:HttpClient, public keycloak:KeycloakService) {
    this.http
      .get("http://localhost:8002/Reservations")
      .subscribe(
        {
          next: value => {
            console.log(value)
            this.reservation = value
          },
          error: err => {
            console.log("ERROR")
            console.log(err)
          }
        }
      )
  }

  showInfo(id:any) {
    this.http
      .get("http://localhost:8002/Reservations/"+id)
      .subscribe(
        {
          next: value => {
            console.log(value)
            this.reservationById = value
          },
          error: err => {
            console.log("ERROR")
            console.log(err)
          }
        }
      )
  }

  deleteReservation(id:number) {
    this.http.delete("http://localhost:8002/Reservations/delete/"+id)
      .subscribe(
        {
          next: value => {
            window.location.reload()
          },
          error: err => {
            console.log(err)
          }
        }
      )

  }

  editReservation(r: any) {
    this.editRes = r
    console.log(this.editRes)
  }

}
