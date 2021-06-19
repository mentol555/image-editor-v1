import { Subscription } from 'rxjs';
import { StepService } from './../../services/step.service';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import Cropper from 'cropperjs';
import { createOptional } from '@angular/compiler/src/core';

@Component({
  selector: 'app-ratio1',
  templateUrl: './ratio1.component.html',
  styleUrls: ['./ratio1.component.scss']
})
export class Ratio1Component implements OnInit {

  @ViewChild("image", { static: false })
  public imageElement: ElementRef = {} as ElementRef;

  active = 0;

  pictureUrl : string = "";
  imageDestination: string = "";
  pictureWidth : number = 0;
  pictureHeight : number = 0;

  private cropper: Cropper;

  @Input()
  toShow: number;
  @Input()
  ratio: number;

  constructor(private dataService: DataService, private stepService: StepService) {
  }
  
  ngOnInit(): void {
    this.pictureUrl = this.dataService.getOriginal().url;
    this.pictureWidth = this.dataService.getOriginal().width;
    this.pictureHeight = this.dataService.getOriginal().height;
  }
  
  bright = 100;
  contrast = 100;
  hue = 0;
  canvas: HTMLCanvasElement;
  ngAfterViewInit(){
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: false,
      scalable: true,
      aspectRatio: this.ratio,
      crop: () => {
        this.cropItWithChanges();
      }
    });
  }
  cropItWithChanges(){
    this.canvas = this.cropper.getCroppedCanvas();
    var ctx = this.canvas.getContext("2d");
    var filterstring:string = "brightness("+this.bright+"%) " + "hue-rotate("+this.hue+"deg)" + "contrast("+this.contrast+"%)";
    ctx!.filter = filterstring;
    ctx?.drawImage(this.canvas,0,0);
    this.imageDestination = this.canvas?.toDataURL("image/png");
  }

  rotateright(){
    this.cropper.rotate(90);
  }
  rotateleft(){
    this.cropper.rotate(-90);
  }
  fliphoriz(){
    this.cropper.scaleX(-1*(this.cropper.getData().scaleX));
  }
  flipvertic(){
    this.cropper.scaleY(-1*(this.cropper.getData().scaleY));
  }

  incrBright() { if(this.bright < 200) {this.bright++;} this.cropItWithChanges(); }
  decrBright() { if(this.bright > 0) {this.bright--;} this.cropItWithChanges(); }

  incrCont() { if(this.contrast < 200) {this.contrast++;} this.cropItWithChanges(); }
  decrCont() { if(this.contrast > 0) {this.contrast--;} this.cropItWithChanges();}

  incrHue(){ if(this.hue < 360) {this.hue++;} this.cropItWithChanges(); }
  decrHue(){ if(this.hue > 0) {this.hue--;} this.cropItWithChanges(); }

  nextStep(){
    this.cropItWithChanges();
    if(this.ratio === 1){
      this.dataService.set1_1(this.imageDestination);
    }
    if(this.ratio === 16/9){
      this.dataService.set16_9(this.imageDestination);
    }
    this.stepService.nextStep();
  }
  backStep(){
    this.stepService.backStep();
  }
  
}
