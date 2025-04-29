import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  baseUrl = 'http://localhost:3000'; // Base URL for the backend
  username: string = ''; // Bound to the username input field
  password: string = ''; // Bound to the password input field

  constructor(private http: HttpClient,private router: Router) {}

  onLogin(): void {
    const headers = new HttpHeaders({
      'username': this.username,
      'password': this.password
    });

    this.http.post(`${this.baseUrl}/login`, {}, { headers, observe: 'response', withCredentials: true })
      .subscribe({
        next: () => {
          console.log('Login successful.');
          this.router.navigate(['/home']); // Navigate to the homepage after login
        },
        error: (error) => {
          console.error('Login failed:', error);
        }
      });
  }
}
