import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  @Input({required:true}) data!:Ticket;
  @Output() Close=new EventEmitter();
  detailsVisible=true;

  onToggleDetails(){
    this.detailsVisible=!this.detailsVisible;
  }
  onComplete(){
    this.Close.emit();
  }



}
