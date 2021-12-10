import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGH } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceGHService {

  private apiURL: String = 'https://api.github.com/users';
  constructor(private http: HttpClient) { }

  searchUser (termino: string):Observable<UserGH>{

    const url = `${this.apiURL}/${termino}`;
    return this.http.get<UserGH>(url);

  }

}
