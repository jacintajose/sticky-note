import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StickyService } from './stiky.service';
import { NewComponent } from './new/new.component';
import { StikysComponent } from './stikys/stikys.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/stiky',pathMatch:'full'},
  {path: 'stiky', component: StikysComponent},
  {path: 'new', component: NewComponent},
  {path: 'details/:id', component: DetailComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
