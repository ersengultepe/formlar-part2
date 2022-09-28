import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { Form1Component } from './components/form1/form1.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { Form1Pipe } from './components/form1/pipes/form1.pipe';
import { Form2Component } from './components/form2/form2.component';
import { Form2KayitComponent } from './components/form2/form2-kayit/form2-kayit.component';
import { Form2GuncelleComponent } from './components/form2/form2-guncelle/form2-guncelle.component';
import { Form2ListeleComponent } from './components/form2/form2-listele/form2-listele.component';
import { Form2Pipe } from './components/form2/pipes/form2.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    Form1Component,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    Form1Pipe,
    Form2Component,
    Form2KayitComponent,
    Form2GuncelleComponent,
    Form2ListeleComponent,
    Form2Pipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
