import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Solution {
  idSolution?: number;   // ← idSolution avec S majuscule
  nom: string;
  description?: string;
  dateCreation?: string;
}

@Injectable({ providedIn: 'root' })
export class SolutionService {
  private api = 'https://smsc-backend-production.up.railway.app/api/solutions';
  constructor(private http: HttpClient) {}
  getAll(): Observable<Solution[]> { return this.http.get<Solution[]>(this.api); }
  getById(id: number): Observable<Solution> { return this.http.get<Solution>(`${this.api}/${id}`); }
  create(s: Solution): Observable<Solution> { return this.http.post<Solution>(this.api, s); }
  update(id: number, s: Solution): Observable<Solution> { return this.http.put<Solution>(`${this.api}/${id}`, s); }
  delete(id: number): Observable<void> { return this.http.delete<void>(`${this.api}/${id}`); }
}
