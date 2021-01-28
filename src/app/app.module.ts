import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './common-components/project/project.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './common-components/menu/menu.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { LogoComponent } from './common-components/logo/logo.component';
import { ConceptsComponent } from './pages/concepts/concepts.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    LogoComponent,
    ConceptsComponent,
    ContactsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
