import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginYRedesComponent } from './components/login-y-redes/login-y-redes.component';
import { BannerComponent } from './components/banner/banner.component';
import { InfoGralComponent } from './components/info-gral/info-gral.component';
import { MenuComponent } from './components/menu/menu.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginYRedesComponent,
    BannerComponent,
    InfoGralComponent,
    MenuComponent,
    ExperienciaComponent,
    EducacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
