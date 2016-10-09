import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/cc-contact';
import { JworksContactsService } from '../jworks-contacts.service';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.scss']
})
export class ContactEditorComponent implements OnInit {

  contact: Contact = <Contact>{ address: {}};

  constructor(private contactsService: JworksContactsService, private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.params['id'])
                        .subscribe(contact => this.contact = contact);
  }

}
