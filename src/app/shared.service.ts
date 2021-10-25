import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
resiveSubject = new Subject<string>()
currentSend = this.resiveSubject.asObservable();
  constructor() { }
  resiveData(Arry){
   return this.resiveSubject.next(Arry)
  }
}
