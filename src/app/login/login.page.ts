import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Auth, signInWithEmailAndPassword } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:any;
  password:any;

  constructor(private navCtrl : NavController, 
    private auth : Auth,
    private router : Router,
    private alertController: AlertController) { }

  gotosignup() {
    this.router.navigateByUrl('/signup', {replaceUrl: true});
  }

  login() {
    const user = signInWithEmailAndPassword(this.auth, this.email, this.password)

    if(user) {
      this.router.navigateByUrl('/home', {replaceUrl: true});
    } else {
      this.showAlert('Problème dans le process de la connexion');
    }
  }

  async showAlert(message) {
    const alert = await this.alertController.create({
      message, buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
