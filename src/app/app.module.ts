import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule, FormsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"currency-xchange-ed31c","appId":"1:213946396924:web:efd931a00162549bc72779","storageBucket":"currency-xchange-ed31c.firebasestorage.app","apiKey":"AIzaSyC0zlkU60xx84sRQpW1m3mX4X4jIIHmooU","authDomain":"currency-xchange-ed31c.firebaseapp.com","messagingSenderId":"213946396924"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
