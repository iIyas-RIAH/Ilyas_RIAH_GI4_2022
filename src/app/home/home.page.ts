import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ModalController, NavController } from '@ionic/angular';
import { signOut } from 'firebase/auth';
import { Formation } from "../Formation.model";
import { DataService } from '../data.service';
import { FormationDetailPage } from '../formation-detail/formation-detail.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedFormation: Formation;
  formations = [];

  constructor(private auth: Auth,
    private navCtrl : NavController,
    private modalCtrl : ModalController,
    private dataService: DataService) {
      this.dataService.getFormation().subscribe(res => {
        this.formations = res;
      })
    }

  getUserProfil() {
    const user = this.auth.currentUser;
  }

  logout() {
    signOut(this.auth);
    this.navCtrl.navigateRoot('/');
  }

  async onSelect(formation){
    const detail = await this.modalCtrl.create({
      component: FormationDetailPage,
      componentProps: { id: formation.id },
      breakpoints: [ 0, 0.5, 0.8 ],
      initialBreakpoint: 0.5
    });
    detail.present();
  }

  mesFormations() {
    this.navCtrl.navigateForward('/mes-formation');
  }

  ngOnInit() {
    this.getUserProfil();
  }
}
