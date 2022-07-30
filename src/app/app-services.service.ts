import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class AppServicesService {
  constructor(private http: HttpClient) {}
  login(username, password): Observable<any> {
    return this.http.post<User>(`${environment.url}/token/`, {
      username,
      password,
    });
  }
  getDataFromToken(token): Observable<any> {
    return this.http.get<any>(`${environment.url}/decode/?token=${token}`);
  }
}
