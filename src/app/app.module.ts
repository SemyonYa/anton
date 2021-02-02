import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponentInfo } from './common-components/project-info/project-info.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './common-components/menu/menu.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { LogoComponent } from './common-components/logo/logo.component';
import { ConceptsComponent } from './pages/concepts/concepts.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectComponent } from './pages/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponentInfo,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    LogoComponent,
    ConceptsComponent,
    ContactsComponent,
    AboutComponent,
    ProjectComponent
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
