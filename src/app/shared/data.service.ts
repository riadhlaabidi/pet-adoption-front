import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data = new BehaviorSubject<string>('');

  setData(newData: string) {
    this.data.next(newData);
  }

  getData() {
    return this.data.asObservable();
  }

  constructor() { }
}
