import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadComponent: () => import('@app/feature/authentication/login/login.component').then(m => m.LoginComponent) },
  { path: 'register', loadComponent: () => import('@app/feature/authentication/register/register.component').then(m => m.RegisterComponent) },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [],
})
export class AuthenticationModule {}
