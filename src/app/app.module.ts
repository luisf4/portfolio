import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteComponent } from './site/site.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { WellcomeComponent } from './components/content/wellcome/wellcome.component';
import { ProjectsComponent } from './components/content/projects/projects.component';
import { ShowcasesComponent } from './components/content/showcases/showcases.component';
import { ContactComponent } from './components/content/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    WellcomeComponent,
    ProjectsComponent,
    ShowcasesComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
