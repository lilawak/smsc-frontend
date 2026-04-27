import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Client {
  idClient?: number;
  nom: string;
  email: string;
  telephone?: string;
  secteur?: string;
  notes?: string;
}

@Injectable({ providedIn: 'root' })
export class ClientService {
  private api = 'https://smsc-backend-production.up.railway.app/api/clients';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Client[]> { return this.http.get<Client[]>(this.api); }
  getById(id: number): Observable<Client> { return this.http.get<Client>(`${this.api}/${id}`); }
  create(c: Client): Observable<Client> { return this.http.post<Client>(this.api, c); }
  update(id: number, c: Client): Observable<Client> { return this.http.put<Client>(`${this.api}/${id}`, c); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
