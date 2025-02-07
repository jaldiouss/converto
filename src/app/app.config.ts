import { ApplicationConfig } from '@angular/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() =>
      initializeApp({
        projectId: "currency-xchange-ed31c",
        appId: "1:213946396924:web:efd931a00162549bc72779",
        storageBucket: "currency-xchange-ed31c.firebasestorage.app",
        apiKey: "AIzaSyC0zlkU60xx84sRQpW1m3mX4X4jIIHmooU",
        authDomain: "currency-xchange-ed31c.firebaseapp.com",
        messagingSenderId: "213946396924"
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), // Assurez-vous que cette ligne ne génère plus d'erreur
  ],
};