import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule} from '@angular/forms';
import { ImageDrawingModule } from 'ngx-image-drawing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ratio1Component } from './components/ratio1/ratio1.component';
import { SeoComponent } from './components/seo/seo.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    UploadImageComponent,
    Ratio1Component,
    SeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDropzoneModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSliderModule,
    FormsModule,
    ImageDrawingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
