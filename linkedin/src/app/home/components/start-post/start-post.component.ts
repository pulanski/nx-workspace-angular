import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faDragon } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss'],
})
export class StartPostComponent implements OnInit {
  constructor(public modalController: ModalController, private library: FaIconLibrary) {
    library.addIcons(faDragon, faStackOverflow, faAngular);
  }

  ngOnInit() {}

  async presentModal() {
    console.log('CREATE POST');
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'my-custom-class-2',
    });

    await modal.present();

    const { data, role } = await modal.onDidDismiss();

    if (data) {
      console.log('data exists');
    }

    console.log('role: ', role, 'data: ', data);
  }
}
