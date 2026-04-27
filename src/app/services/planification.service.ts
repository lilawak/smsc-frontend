import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Planification {
  idPlanification?: number;
  version?: any;
  client?: any;
  titre: string;
  dateLivraisonPrevue?: string;
  dateLivraisonReelle?: string;
  dateCommande?: string;
}

@Injectable({ providedIn: 'root' })
export class PlanificationService {
  private api = 'https://smsc-backend-production.up.railway.app/api/planifications';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Planification[]> { return this.http.get<Planification[]>(this.api); }
  getById(id: number): Observable<Planification> { return this.http.get<Planification>(`${this.api}/${id}`); }
  create(p: Planification): Observable<Planification> { return this.http.post<Planification>(this.api, p); }
  update(id: number, p: Planification): Observable<Planification> { return this.http.put<Planification>(`${this.api}/${id}`, p); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
