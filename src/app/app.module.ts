import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RessourceComponent } from './ressource/ressource.component';
import { ReservationComponent } from './reservation/reservation.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { PersonComponent } from './person/person.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {NgxPaginationModule} from "ngx-pagination";
import {environment} from "../environments/environment";

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.KEYCLOAK_URL,
        realm: 'exam-realm',
        clientId: 'ng-reserve-client',
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      },
      bearerExcludedUrls: [
        'main$'
      ]
    });
}
@NgModule({
  declarations: [
    AppComponent,
    RessourceComponent,
    ReservationComponent,
    HomeComponent,
    PersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    KeycloakAngularModule,
    NgxPaginationModule,
  ],
  providers: [{provide : APP_INITIALIZER, deps : [KeycloakService],useFactory : initializeKeycloak, multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
