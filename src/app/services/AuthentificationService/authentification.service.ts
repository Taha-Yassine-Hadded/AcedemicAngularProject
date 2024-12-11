import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {user} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }

  singin(data:any):Observable<any>{
    return this.http.post<any>('http://localhost:3000/signin',data);
  }
}
