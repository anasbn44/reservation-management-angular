import { Component } from '@angular/core';
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public keycloak:KeycloakService) {
  }

  async login(){
    await this.keycloak.login({
      redirectUri : window.location.origin
    })
  }
}
