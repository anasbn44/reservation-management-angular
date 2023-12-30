import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ressource} from "../model/Ressource";

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  private url = "http://localhost:8000/resources-service/";
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Ressource[]> {
    return this.http.get<Ressource[]>(this.url+"Resources");
  }
}
