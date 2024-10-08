import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Category } from '../models/backend/category';
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/api/v1/categories');
  }

  createCategory(category: Category): Observable<Category> {
    return this.http.post('http://localhost:3000/api/v1/categories', category);
  }

  deleteCategory(categoryID: string): Observable<Object> {
    return this.http.delete(
      `http://localhost:3000/api/v1/categories/${categoryID}`
    );
  }
}
