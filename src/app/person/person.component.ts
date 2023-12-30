import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrl: './person.component.css'
})
export class PersonComponent {
  persons:any;
  page:number = 1;
  constructor(private httpClient: HttpClient, public keycloak:KeycloakService){

  }
  ngOnInit(): void {
    this.httpClient
      .get("http://localhost:8002/Personnes")
      .subscribe(
        {
          next: value => {
            console.log(value)
            this.persons = value
          },
          error: err => {
            console.log(err)
          }
        }
      )
  }

  deletePerson(id:number) {

  }

  editPerson(p: any) {

  }
}
