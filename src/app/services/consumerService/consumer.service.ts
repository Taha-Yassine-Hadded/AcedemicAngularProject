import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  baseUrl :string ='http://localhost:3000/'
  constructor(private _http:HttpClient) { }

  fetch <T>(endpoint :string,id:number =0) : Observable<T> {
    return id==0
      ?  this._http.get<T>(`${this.baseUrl}${endpoint}`)
      : this._http.get<T>(`${this.baseUrl}${endpoint}/${id}`);

  } //0 ma3neha ken ma3titech id ijiib kol
  add<T> (endpoint :string,body : any)
  {
    return this._http.post<T>(`${this.baseUrl}${endpoint}`,body);
  }
  update<T>(endpoint: string, body: any, id: any) : Observable<T>{
    return this._http.put<T>(`${this.baseUrl}${endpoint}/${id}`,body);
  }
  remove<T>(endpoint: string, id: any): Observable<T>{
    return this._http.delete<T>(`${this.baseUrl}${endpoint}/${id}`)
  }
}
