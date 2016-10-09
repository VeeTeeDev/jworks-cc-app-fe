import { Component, OnInit, Input, Inject} from '@angular/core';
import { Contact } from '../models/cc-contact';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact;

  constructor(@Inject('API_BASE') private apiBase) { }

  ngOnInit() {
  }
}
