import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public router: Router,
    public navCtrl: NavController) { }

  ngOnInit() {
  }

  btn_registrar() {
    this.router.navigateByUrl('/home');
  }

  btn_ingresar() {
    this.navCtrl.navigateForward('/tabs/Asistencia');
  }

}
