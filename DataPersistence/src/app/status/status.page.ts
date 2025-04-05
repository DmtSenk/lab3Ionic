import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, IonLabel, IonItem, IonList, IonRadio, IonRadioGroup, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.page.html',
  styleUrls: ['./status.page.scss'],
  standalone: true,
  imports: [IonButton, IonRadioGroup, IonRadio, IonList, IonItem, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButtons,IonBackButton]
})
export class StatusPage implements OnInit {
  // Inject the Storage and Router services
  constructor(private storage:Storage, private router:Router) {
   }
  
  status:string = "";

  ngOnInit() {
  }

  // Function to handle button click
  async onButtonClick(){
    await this.storage.create(); // Initialize storage
    await this.storage.set("status",this.status); // Save status
    this.router.navigate(['/home']); // Navigate to home page

  }

}
