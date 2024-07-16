import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent,ControlComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  @Output() newticket=new EventEmitter<{title:string,request:string}>();
  enteredtitle="";
  enteredrequest="";

  onSubmit(){
    const ticketdata={
      title:this.enteredtitle,
      request:this.enteredrequest

    };
    this.newticket.emit(ticketdata);

  }


}
