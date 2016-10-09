import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../models/cc-contact';
import { JworksContactsService } from '../jworks-contacts.service';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  contact: Contact;

  constructor(private contactsService: JworksContactsService, private router: Router,
   private route: ActivatedRoute, @Inject('API_BASE') private apiBase) {}

  ngOnInit() {
    this.contactsService.getContact(this.route.snapshot.params['id'])
                        .subscribe(contact => this.contact = contact);
  }
}
