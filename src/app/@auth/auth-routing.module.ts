import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from "./auth.component";
import {queryParameterResolver} from "../core/resolvers/query-parameter.resolver";
import {LoginComponent} from "./components/login/login.component";
import {IsGuestGuard} from "./guards/is-guest.guard";


const routes: Routes = [
  {
    path: '', component: AuthComponent,
    resolve: {queryParam: queryParameterResolver},
    children: [
      {
        path: 'login',
        canActivate: [IsGuestGuard],
        component: LoginComponent,
        data: {
          title: 'ورود و ثبت‌نام'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
