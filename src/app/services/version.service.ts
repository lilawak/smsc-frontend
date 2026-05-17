import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Version {
  idVersion?: number;
  solution?: any;
  numeroVersion: string;
  description?: string;
  dateReleasePrevue: string;
  dateReleaseReelle?: string;
  etat: string;
}

@Injectable({ providedIn: 'root' })
export class VersionService {

  private apiUrl = 'https://smsc-backend-production.up.railway.app/api/versions';

  constructor(private http: HttpClient) {}

  /**
   * Fetch versions with optional filters.
   * Passing null for a param means that filter is not applied.
   */
  getAll(solution: string | null = null, etat: string | null = null): Observable<any[]> {
    let params = new HttpParams();
    if (solution) params = params.set('solution', solution);
    if (etat)     params = params.set('etat', etat);
    return this.http.get<any[]>(this.apiUrl, { params });
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(version: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, version);
  }

  update(id: number, version: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, version);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
