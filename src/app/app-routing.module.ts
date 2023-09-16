import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { PrayerComponent } from './pages/prayer/prayer.component';
import { VerseComponent } from './pages/verse/verse.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'versiculo',
    component: VerseComponent
  },
  {
    path: 'oracion',
    component: PrayerComponent
  },
  {
    path: 'nosotros',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
