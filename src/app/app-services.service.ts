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
  search({data, msg_id}): Observable<any> {
    console.log(data);
    console.log(msg_id);  
    return this.http.post<any>(`${environment.url}/search/`,{
    data,
    msg_id
    });
  }
  getUsersList(): Observable<any> {
    return this.http.get<any>(`${environment.url}/user/`);
  }
  removeUser(userId): Observable<any> {
    return this.http.delete<any>(`${environment.url}/user/${userId}/`);
  }
  addUser(data: any): Observable<any> {
    return this.http.post<any>(`${environment.url}/register/`, data);
  }
  modifyUser(userId: any, data): Observable<any> {
    return this.http.put<any>(`${environment.url}/user/${userId}/`,data);
  }
  refreshToken(token): Observable<any> {
    return this.http.post<any>(`${environment.url}/refresh/`, {
      refresh: token,
    });
  }
  changeUserImage(data): Observable<any> {
    console.log(data)
    return this.http.post<any>(`${environment.url}/photo/ajouter`, data);
  }
  savePdfToDb(data): Observable<any> {
    return this.http.post<any>(`${environment.url}/pdf/create/`, data);
  }
  generateArchive(annee,mois, jour ): Observable<any> {
    return this.http.get<any>(`${environment.url}/pdf/view/?annee=${annee}&mois=${mois}`);
  }
}