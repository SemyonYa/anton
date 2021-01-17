import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './pages/project/project.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './common-components/menu/menu.component';
import { FooterComponent } from './common-components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
