import { Routes } from '@angular/router';
import { AuthenticationModule } from '@app/feature/authentication/authentication.module';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./feature/authentication/authentication.module').then((m) => m.AuthenticationModule),
  },
];
