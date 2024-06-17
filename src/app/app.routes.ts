import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";
import {Error404Component} from "./@page/components/error404/error404.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./@page/page.module').then(m => m.PageModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./@auth/auth.module').then(m => m.AuthModule)
      },
      {path: '**', component: Error404Component}
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
