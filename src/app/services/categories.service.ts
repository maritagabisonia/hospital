import { Injectable } from '@angular/core';
import { Categories } from '../models/categories';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  public category: Categories[] = [];

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>("http://localhost:5123/api/Authentication/GetDistinctCategories")
  }

  get categoryList(): Categories[] {
    return this.category;
  }
  set categoryList(list: Categories[]) {
    this.category = list;
  }
}
