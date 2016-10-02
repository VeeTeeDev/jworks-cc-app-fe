import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/cc-contact';
import { JworksContactsService } from '../jworks-contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: Array<Contact>;

  constructor(private contactsService: JworksContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
