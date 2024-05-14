import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { Login2FaComponent } from './components/login-2-fa/login-2-fa.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login-2Fa', component: Login2FaComponent },
    { path: 'doctors', component: CategoriesListComponent }


];
