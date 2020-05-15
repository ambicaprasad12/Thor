import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funds } from './funds';
@Injectable({
  providedIn: 'root'
})
export class FundsServiceService {

  private baseUrl = 'http://localhost:3333/funds';

  constructor(private http: HttpClient) { }

  getFunds(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFunds(funds: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, funds);
  }

  updateFunds(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/edit/${id}`,value);
  }

  deleteFunds(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFundsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}

