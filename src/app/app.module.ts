import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
//import { HomeComponent } from './home/home/home.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    //HomeComponent,
    MainhomeComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
