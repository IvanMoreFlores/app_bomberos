import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.page.html',
  styleUrls: ['./error.page.scss'],
})
export class ErrorPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {

  }

  btn_cancelar() {
    this.navCtrl.navigateBack('/home');
  }

}
