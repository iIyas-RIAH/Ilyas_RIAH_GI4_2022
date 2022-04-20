import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Auth, createUserWithEmailAndPassword } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email:any;
  password:any;
  presentAlert:any;

  constructor(private navCtrl : NavController, 
    private auth : Auth,
    private router : Router,
    private alertController: AlertController) { }

  gotologin() {
    this.router.navigateByUrl('/login', {replaceUrl: true});
  }

  SignUp() {
    const user = createUserWithEmailAndPassword(this.auth, this.email, this.password)
    if(user) {
      this.router.navigateByUrl('/home', {replaceUrl: true});
    } else {
      this.showAlert('Problème dans le process de l\'inscription');
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
