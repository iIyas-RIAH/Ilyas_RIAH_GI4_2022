import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mes-formation-detail',
  templateUrl: './mes-formation-detail.page.html',
  styleUrls: ['./mes-formation-detail.page.scss'],
})
export class MesFormationDetailPage implements OnInit {

  @Input() id: string;
  formation = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getFormationById(this.id).subscribe(res => {
      this.formation = res;
    });
  }

}
