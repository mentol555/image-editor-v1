import { DataService } from './../../services/data.service';
import { StepService } from './../../services/step.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss']
})
export class SeoComponent implements OnInit {

  public originalImage : string = "";
  public image_1_1: string = "";
  public image_16_9: string = "";

  constructor(private stepService: StepService, private dataService: DataService) {
    this.originalImage = this.dataService.getOriginal().url;
    this.image_1_1 = this.dataService.get1_1().url;
    this.image_16_9 = this.dataService.get16_9().url;
  }

  ngOnInit(): void {
  }

  @Input()
  toShow : number;

  backStep(){
    this.stepService.backStep();
  }
  

}
