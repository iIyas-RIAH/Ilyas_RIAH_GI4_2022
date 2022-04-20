import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ToastController } from '@ionic/angular';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.page.html',
  styleUrls: ['./formation-detail.page.scss'],
})
export class FormationDetailPage implements OnInit {

  @Input() id: string;
  formation = null;

  constructor(private auth: Auth,
    private dataService: DataService,
    private toastCtrl: ToastController) { }

  ngOnInit(): void {
    this.dataService.getFormationById(this.id).subscribe(res => {
      this.formation = res;
    });
  }

  async onSubscription() {
    const Data = { 
      UserID : this.auth.currentUser.uid,
      IdFormation : this.formation.IdFormation,
      NomFormation : this.formation.NomFormation,
      PeriodeFormation : this.formation.PeriodeFormation,
      Prix : this.formation.Prix,
      description : this.formation.description,
      IdFireFormation : this.formation.id
     }
    this.dataService.OnSubscribe(Data);
    const toast = await this.toastCtrl.create({
      message: 'Félicitations, vous êtes inscrit dans cette formation.',
      duration: 2500,
    });
    toast.present();
  }

}
