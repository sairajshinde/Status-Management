import { Component, Input, input } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent,TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {
  tickets:Ticket[]=[];

  onAdd(ticketdata:{title:string;request:string}){
    const ticket:Ticket={
      title: ticketdata.title,
      request: ticketdata.request,
      id:Math.random().toString(),
      status: "open"
    }
    this.tickets.push(ticket);
  }
  onCloseTicket(id:string){
    this.tickets=this.tickets.map((ticket)=>{
      if(ticket.id===id){
        return {...ticket,status:"closed"}
      }
      return ticket;
    })

  }


}
