import { Component, OnInit} from '@angular/core';
import { Contact } from '../models/cc-contact';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  contact: Contact = {
        id: 0,
        name: 'Wonne Keysers',
        email: 'wonne.keysers@ordina.be',
        phone: '32 476 22 63 30',
        birthday: '04-06-1980',
        website: 'https://www.ordina.be',
        image: '/assets/images/placeholder.png',
        address: {
          street: 'Blarenberg 3b',
          zip: '2800',
          city: 'Mechelen',
          country: 'Belgium'
        }
  };

  constructor() { }

  ngOnInit() {
  }
}
