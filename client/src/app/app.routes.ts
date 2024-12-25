import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './guards/auth.guard';


// Your routing file should look like this
export const routes: Routes = [
  // A route to the home page (component)
  {path: 'home',component: HomeComponent , canActivate: [authGuard]},
  {path: '',redirectTo: 'home',pathMatch: 'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  // A route to the about us page (module)
  {
    path: 'about-us',
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
];
