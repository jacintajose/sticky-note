import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StickyService } from './stiky.service';
import { NewComponent } from './new/new.component';
import { StikysComponent } from './stikys/stikys.component';
import { DetailComponent } from './detail/detail.component';
import { AuthComponent } from './auth/auth.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: '', redirectTo: '/stiky',pathMatch:'full'},
  {path: 'stiky', component: StikysComponent},
  {path: 'new', component: NewComponent},
  {path: 'details/:id', component: DetailComponent},
  {path: 'login', component: AuthComponent},
  {path: 'register', component: AuthComponent},
  {path: 'test', component: TestComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
