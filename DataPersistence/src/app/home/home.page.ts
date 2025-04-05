import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton,RouterLink],
})
export class HomePage {
  myStatus:string = "";
  constructor(private storage:Storage) {} // Inject the Storage service

  //When the view is about to be entered
  async ionViewWillEnter(){
    await this.storage.create(); // Initialize the Storage
    this.myStatus = await this.storage.get('status'); // Retrieve the stored status
  }

}
