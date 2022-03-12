import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  pauseSeconnecter!:boolean;
  pauseSedeconnecter!:boolean;
  boutonDinamique:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route:Router
  ) {
    this.initializeApp();
  }
  ngOnInit(): void {
    this.boutonDinamique =localStorage.getItem('userData');
    console.log();
    if (this.boutonDinamique!=null) {
      this.pauseSedeconnecter=true;
    } else {
      this.pauseSeconnecter=true;
      this.pauseSedeconnecter=false;
      
      
    }
    
  }
  initializeApp(): void {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  deconnexion(){
    localStorage.removeItem('userData');
    localStorage.clear();
    this.pauseSeconnecter=true;
    this.pauseSedeconnecter=false;
    this.route.navigate(['accueil']);
    console.log( localStorage.getItem('userData'));
    
  }
 

}
