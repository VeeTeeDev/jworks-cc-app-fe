import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/cc-contact';
import { JworksContactsService } from '../jworks-contacts.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;

  constructor(private contactsService: JworksContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
  }
}
