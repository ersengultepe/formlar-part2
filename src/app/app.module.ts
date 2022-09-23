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

@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    Form1Component,
    LoginComponent,
    NotFoundComponent,
    NavbarComponent,
    Form1Pipe,
    Form2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
