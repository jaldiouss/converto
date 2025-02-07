import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'converto';
  currencies: string[] = [];
  errorMessage: string | null = null;

  constructor(private ApiService: ApiService) {}

  ngOnInit(): void {
    this.ApiService.getCurrencies().subscribe(
      (data) => {
        this.currencies = Object.keys(data); // Supposons que l'API retourne un objet avec les devises comme clés
      },
      (error) => {
        console.error(error);
        this.errorMessage = 'Erreur lors de la récupération des devises.';
      }
    );
  }
}
