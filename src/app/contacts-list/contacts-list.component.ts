import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/cc-contact';
import { JworksContactsService } from '../jworks-contacts.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {

  contacts: Observable<Array<Contact>>;
  private terms$ = new Subject<string>();

  constructor(private contactsService: JworksContactsService) { }

  ngOnInit() {
    this.contacts = this.contactsService.getContacts();
    this.terms$.debounceTime(400)
               .distinctUntilChanged()
               .subscribe(term => this.search(term));
  }

  search(term: string) {
    this.contacts = this.contactsService.search(term);
  }

}
