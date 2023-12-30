import { Component } from '@angular/core';
import {KeycloakProfile} from "keycloak-js";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'final_exam_angular_app';
  public profile? : KeycloakProfile;
  constructor(public keycloak:KeycloakService) {
  }

  ngOnInit() {
    if(this.keycloak.isLoggedIn()){
      this.keycloak.loadUserProfile().then(profile=>{
        this.profile=profile;});
    }
  }

  async login(){
    await this.keycloak.login({
      redirectUri : window.location.origin
    })
  }
  onLogout() {
    this.keycloak.logout(window.location.origin);
  }

  account() {
    window.location.href="http://localhost:8080/realms/ab-realm/account/#/personal-info";
  }
}
