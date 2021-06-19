import { DataService } from './../../services/data.service';
import { StepService } from './../../services/step.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {

  constructor(private stepService: StepService, private dataService: DataService) { }

  ngOnInit(): void {
  }

  public pictureUrl = "";
  public selectedImage = {} as File;
  public height = 0;
  public width = 0;

  onSelect(e: any){
    console.log(e);
    if(e.addedFiles){
      var reader = new FileReader();
      reader.readAsDataURL(e.addedFiles[0]);
      reader.onload=(event:any)=>{
        this.pictureUrl = event.target.result;
        this.selectedImage = event.target.result;
        
        const img = new Image();
        img.src = reader.result as string;
        img.onload = () => {
          this.height = img.naturalHeight;
          this.width = img.naturalWidth;
          console.log('Width and Height', this.width, this.height);
        };
      }
    }
  }

  deleteImage(){
    this.pictureUrl = "";
    this.selectedImage = {} as File;
  }

  nextStep(){
    if(!this.pictureUrl){
      alert("Kérlek válassz egy képet!");
    }
    else{
      this.dataService.setOriginal(this.pictureUrl,this.width,this.height);
      this.stepService.nextStep();
    }
  }
}
