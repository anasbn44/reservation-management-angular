import {Component, OnInit} from '@angular/core';
import {Ressource} from "../model/Ressource";
import {RessourceService} from "../services/ressource.service";

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrl: './ressource.component.css'
})
export class RessourceComponent implements OnInit{


  ressources : Ressource[] | undefined;
  constructor(private ressourceService: RessourceService) { }
  ngOnInit(): void {

    this.ressourceService.getProducts().subscribe({
      next: (data: Ressource[]) => {
        this.ressources = data;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }
}
