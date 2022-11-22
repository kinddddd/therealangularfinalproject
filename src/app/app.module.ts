import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { DogsComponent } from './pages/dogs/dogs.component';
import { AboutComponent } from './pages/about/about.component';
import { DogsDetailComponent } from './pages/dogs-detail/dogs-detail.component';
import { NewDogComponent } from './pages/new-dog/new-dog.component';
import { UpdateDogComponent } from './pages/update-dog/update-dog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DogsComponent,
    AboutComponent,
    DogsDetailComponent,
    NewDogComponent,
    UpdateDogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
