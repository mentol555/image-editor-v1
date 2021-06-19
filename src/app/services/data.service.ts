import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  Image = {
    Original : {url : "", width : 0, height : 0},
    Ratio_1_1 : {url : ""},
    Ratio_16_9 : {url : ""}
  }

  setOriginal(url: string, width: number, height: number){
    this.Image.Original.url = url;
    this.Image.Original.width = width;
    this.Image.Original.height = height;
  }
  getOriginal(){
    return this.Image.Original;
  }
  set1_1(url: string){
    this.Image.Ratio_1_1.url = url;
  }
  get1_1(){ return this.Image.Ratio_1_1; }

  set16_9(url: string){
    this.Image.Ratio_16_9.url = url;
  }
  get16_9() { return this.Image.Ratio_16_9; }
}
