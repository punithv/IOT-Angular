import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Device} from 'src/model/Device';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http:HttpClient) {
  }

  getdata(){
    return this.http.get<Device>(' https://iua0l7xfrd.execute-api.us-west-2.amazonaws.com/management')
  }
}
  
