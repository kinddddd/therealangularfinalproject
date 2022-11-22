import { UpdateDogComponent } from './pages/update-dog/update-dog.component';
import { NewDogComponent } from './pages/new-dog/new-dog.component';
import { DogsDetailComponent } from './pages/dogs-detail/dogs-detail.component';
import { AboutComponent } from './pages/about/about.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'dogs', component: DogsComponent},
  {path:'dogs/:id', component: DogsDetailComponent},
  {path:'about', component: AboutComponent},
  {path:'newdog', component: NewDogComponent},
  {path:'updatedog/:id', component: UpdateDogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
