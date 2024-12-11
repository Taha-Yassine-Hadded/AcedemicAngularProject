import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {user} from "../../models/user";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient, private router : Router) { }

  singin(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/signin',data);
  }

  isLogged(): Boolean {
    return !!localStorage.getItem('access_token');
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
