import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.fxratesapi.com'; // Remplacez par l'URL de FXRatesAPI
  private apiKey = 'fxr_live_7454a50295ce13c3ea994b22fc9a9919e0c1'; // Remplacez par votre clé API

  constructor(private http: HttpClient) {}

  // Récupérer la liste des devises
  getCurrencies(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
    });

    return this.http.get(`${this.apiUrl}/currencies`, { headers });
  }

  // Récupérer les taux de conversion entre deux devises
  getConversionRate(fromCurrency: string, toCurrency: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
    });

    return this.http.get(
      `${this.apiUrl}/convert?from=${fromCurrency}&to=${toCurrency}`,
      { headers }
    );
  }

  // Récupérer les taux pour toutes les devises par rapport à une devise de base
  getRates(baseCurrency: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.apiKey}`,
    });

    return this.http.get(`${this.apiUrl}/latest?base=${baseCurrency}`, {
      headers,
    });
  }
}
