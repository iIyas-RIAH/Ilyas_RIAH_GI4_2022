import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { signOut } from 'firebase/auth';
import { ModalController, NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { MesFormationDetailPage } from '../mes-formation-detail/mes-formation-detail.page';

@Component({
  selector: 'app-mes-formation',
  templateUrl: './mes-formation.page.html',
  styleUrls: ['./mes-formation.page.scss'],
})
export class MesFormationPage implements OnInit {

  UserID : any;
  formations = [];

  constructor(private auth : Auth,
    private navCtrl : NavController,
    private modalCtrl : ModalController,
    private dataService: DataService) {
      this.UserID = this.getUserProfil();
      this.dataService.getFormationByUser(this.UserID).subscribe(res => {
        this.formations = res;
      })
    }

  back() {
    this.navCtrl.back();
  }
  
  getUserProfil() {
    return this.auth.currentUser.uid;
  }
  
  logout() {
    signOut(this.auth);
    this.navCtrl.navigateRoot('/');
  }

  async onSelect(formation){
    const detail = await this.modalCtrl.create({
      component: MesFormationDetailPage,
      componentProps: { id: formation.IdFireFormation },
      breakpoints: [ 0, 0.5, 0.8 ],
      initialBreakpoint: 0.5
    });
    detail.present();
  }

  ngOnInit() {
  }

}
