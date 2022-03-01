import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Camera} from '@ionic-native/camera/ngx';
import { File} from '@ionic-native/file/ngx';
import { FilePath} from '@ionic-native/file-path/ngx';
import { Crop } from '@ionic-native/crop/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
     HttpClientModule,
     BrowserAnimationsModule,
     ToastrModule.forRoot()
    
     
     
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy
   },
   Camera, 
   File,
   Crop, 
   StatusBar,
   SplashScreen,
   WebView,
   FilePath],
   
  bootstrap: [AppComponent],
})
export class AppModule {}
