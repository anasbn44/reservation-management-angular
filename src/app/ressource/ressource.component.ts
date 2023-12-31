import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.css'
})
export class RessourceComponent{
  resources : any;
  page:number = 1;
  constructor(private http:HttpClient, public keycloak:KeycloakService) {
    this.http
      .get("http://localhost:8001/Resources")
      .subscribe(
        {
          next: value => {
            console.log(value)
            this.resources = value
          },
          error: err => {
            console.log(err)
          }
        }
      )
  }

  deleteResource(idResource:number) {
    this.http.delete("http://localhost:8001/delete/"+idResource)
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

  editResource(resource: any) {

  }
}
