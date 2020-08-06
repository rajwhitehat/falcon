import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ApiService {


  searchResult = new BehaviorSubject(null);
  constructor(private http: HttpClient ) { }

  getPlanets(){
    return this.http.get(`${environment.baseUrl}planets`)
  }

  getVehicles(){
    return this.http.get(`${environment.baseUrl}vehicles`)
  }

  findFalcone(payload){
    return this.http.post(`${environment.baseUrl}find`, payload)
  }

  setSearchresult(value){
    this.searchResult.next(value)
  }
}
