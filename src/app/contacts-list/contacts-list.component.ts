import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/cc-contact';
import { CC_DATA } from '../data/cc-contacts';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: Array<Contact> = CC_DATA;

  constructor() { }

  ngOnInit() {
  }

}
