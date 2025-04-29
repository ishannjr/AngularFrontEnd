import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
// import { AuthGuard } from './auth.guard';
import { AuthGuard } from './AuthGuard';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Route for LoginComponent
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] }, // Protect HomepageComponent with AuthGuard
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to /login by default
  { path: '**', redirectTo: '/login' } // Redirect unknown paths to /login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}