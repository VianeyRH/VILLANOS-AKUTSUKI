import { Component, OnInit, Input } from '@angular/core';
import { Villano } from '../villano';


@Component({
  selector: 'app-villanos-detail',
  templateUrl: './villanos-detail.component.html',
  styleUrls: ['./villanos-detail.component.css']
})
export class VillanosDetailComponent implements OnInit {
  @Input() villano?:Villano;

  constructor() { }

  ngOnInit(): void {
  }

}
