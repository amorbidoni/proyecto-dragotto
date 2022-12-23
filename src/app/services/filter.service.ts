import { EventEmitter, Injectable } from '@angular/core';
import { FitlerParams } from '../interfaces/navBarLinks';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }
  selectedFilter$ = new EventEmitter<FitlerParams>();

  selectFilter(filter:FitlerParams){
    this.selectedFilter$.emit(filter)

  }
  

}
