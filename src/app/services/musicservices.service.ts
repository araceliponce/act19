import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Artists } from '../models/artists';

@Injectable({
  providedIn: 'root'
})
export class MusicservicesService {

  // constructor() { }

  constructor(private http:HttpClient){}

  query:string='';
  apiAudio = environment.apiURL+this.query;

  getDisco(query:string):Observable<Artists[]>{
    const url = this.apiAudio+'?s='+query;
    console.log(url) //ver el url
    return this.http.get<Artists[]>(url); //no es un array, es un objeto {}??
  }


}
