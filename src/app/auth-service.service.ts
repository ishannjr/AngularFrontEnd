import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http:HttpClient) {}

  // Check if the user is authenticated
  // isAuthenticated(): boolean {
  
  //   const token = document.cookie.split('; ').find(row => row.startsWith('authToken='));
  //   console.log('Token from auth servisce',token);
  //   return !!token; 
  // }

  private baseUrl = 'http://localhost:3000'; // Backend base URL

  isAuthenticated(): Observable<boolean> {
    return this.http.get<boolean>(`${this.baseUrl}/auth/check`, { withCredentials: true });
  }
}
