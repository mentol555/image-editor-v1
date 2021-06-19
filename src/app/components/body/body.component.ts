import { StepService } from './../../services/step.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  subscription: Subscription;
  toShow = 1;
  ratio = 1;
  constructor(private stepService: StepService) { 
    this.subscription = this.stepService.onChange().subscribe(
      value => this.toShow = value
    );
    if(this.toShow === 2){
      this.ratio = 1;
    }
    if(this.toShow === 3){
      this.ratio = 16/9;
    }
  }

  ngOnInit(): void {
  }

}
