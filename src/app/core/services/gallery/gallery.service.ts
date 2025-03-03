import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private httpclient :HttpClient) { }

  GetApiProducts():Observable<any>
  {
    return this.httpclient.get(`https://fakestoreapi.com/products`)
  }


  getIdProduct(id:string|null):Observable<any>
  {
    return this.httpclient.get(`https://fakestoreapi.com/products/${id}`)
  }
}
