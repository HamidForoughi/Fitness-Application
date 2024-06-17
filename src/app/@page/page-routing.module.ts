import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IntroComponent} from "./@home/intro/intro.component";
import {PageComponent} from "./page.component";
import {AboutUsComponent} from "./components/about-us/about-us.component";

const routes: Routes = [
  {
    path: '', component: PageComponent,
    children: [
      {path: '', component: IntroComponent},
      {path: 'about-us', component: AboutUsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule {
}
