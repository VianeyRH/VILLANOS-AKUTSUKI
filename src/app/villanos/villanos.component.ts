import { Component, OnInit } from '@angular/core';

import { MessageService } from '../messages.service';
import { Villano } from '../villano';
import { VillanoService } from '../villano.service';


@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent implements OnInit {

  selectedVillano?: Villano;

  villanos: Villano[] = [];

  constructor(private villanoService: VillanoService, private messageService: MessageService) {}

  ngOnInit() {
    this.getVillanos();
  }

  onSelect(villano: Villano): void {
    this.selectedVillano = villano;
    this.messageService.add(`VillanosComponent: Selected villano id=${villano.id}`);
    console.log(this.messageService);
  }

  
  masPoder(villano: Villano): void {
    villano.nivel = villano.nivel + 1;
   }
  menosPoder(villano: Villano): void {
    villano.nivel = villano.nivel - 1;
   }

   getVillanos(): void {
     this.villanoService.getVillanos()
         .subscribe(villanos => this.villanos = villanos);
   }
}
