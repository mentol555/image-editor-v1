import { Injectable } from '@angular/core';
import { Subject,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StepService {

  step: number = 1;
  private subject = new Subject<any>();
  constructor() { }

  nextStep(): void{
    this.step++;
    this.subject.next(this.step);
  }
  backStep(): void{
    this.step--;
    this.subject.next(this.step);
  }

  onChange(): Observable<any> {
    return this.subject.asObservable();
  }



}
