import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { TimeTurnerComponent } from './time-turner/time-turner.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CoverSectionComponent } from './cover-section/cover-section.component';
import { SortingHatResultsComponent } from './sorting-hat-results/sorting-hat-results.component';
import { PreviousExperienceComponent } from './previous-experience/previous-experience.component';
import { SpinningTextComponent } from './spinning-text/spinning-text.component';
import { FadingTextBoxComponent } from './fading-text-box/fading-text-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverPageComponent,
    TimeTurnerComponent,
    HomePageComponent,
    CoverSectionComponent,
    SortingHatResultsComponent,
    PreviousExperienceComponent,
    SpinningTextComponent,
    FadingTextBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
