import { Injectable } from '@angular/core';
import { Villano } from './villano';
import { VILLANOS } from './mock-villanos';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages.service';


@Injectable({
  providedIn: 'root',
})
export class VillanoService {

  getVillanos(): Observable<Villano[]> {
    const villanos = of(VILLANOS);
    this.messagesService.add('VillanoService: fetched villanos');
    return villanos;
  }
  constructor(private messagesService: MessageService) { }
}
