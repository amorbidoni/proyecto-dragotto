import { Component, Input } from '@angular/core';
import { Params, RouterLink } from '@angular/router';

@Component({
  selector: 'app-arrow-back',
  templateUrl: './arrow-back.component.html',
  styleUrls: ['./arrow-back.component.scss']
})
export class ArrowBackComponent  {
  @Input() routerLinkBack!:string | any[] | null | undefined;
  @Input() queryParamsBack!:Params;
  constructor() { }
}
