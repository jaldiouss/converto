import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSignUp() {
    this.authService.signUp(this.email, this.password)
      .then((userCredential) => {
        // Inscription réussie
        const user = userCredential.user;
        console.log('Utilisateur créé :', user);
        // Rediriger ou effectuer d'autres actions après l'inscription
      })
      .catch((error) => {
        // Gérer les erreurs d'inscription
        console.error('Erreur lors de l\'inscription :', error);
      });
  }
}