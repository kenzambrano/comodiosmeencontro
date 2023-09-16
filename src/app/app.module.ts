import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { PrayerComponent } from './pages/prayer/prayer.component';
import { VerseComponent } from './pages/verse/verse.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    PrayerComponent,
    VerseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
