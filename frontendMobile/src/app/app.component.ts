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
  public pages: any[] = [
    {title: 'Nos services', url: '/accueil', icon: 'home'},
    {title: "s'incrire", url: '/resgistre', icon: 'person'},
    {title: 'Se Connecter',url: '/connexion', icon: 'log-in',route: "pauseSeconnecter"},
    {title: 'Se Déconnecter', url: '/accueil', icon: 'log-out', route: "pauseSeconnecter"},
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private route:Router
  ) {
    this.initializeApp();
  }
  ngOnInit(): void {
    this.boutonDinamique =JSON.parse(localStorage.getItem('userData'));
    console.log();
    if (this.boutonDinamique!=null) {
      this.pauseSedeconnecter=true;
      this.pauseSeconnecter=false;
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
    this.route.navigate(['detail']);
    console.log( localStorage.getItem('userData'));
    
  }
  deconnecter() {
    console.log('signout');
  }
 

}
