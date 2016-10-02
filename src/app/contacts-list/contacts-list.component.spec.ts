/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { ContactsListComponent } from './contacts-list.component';
import { Contact } from '../models/cc-contact';
import { CC_DATA } from '../data/cc-contacts';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { JworksContactsService } from '../jworks-contacts.service';


describe('Component: ContactsList', () => {
  it('should create an instance', () => {
    let service = new JworksContactsService();
    let component = new ContactsListComponent(service);
    expect(component).toBeTruthy();
  });
});

// Shallow test
// Test that the component gets rendered correctly.
fdescribe('Component shallow: ContactsListComponent', () => {
    let mockContacts: Array<Contact>;
    let fixture: ComponentFixture<ContactsListComponent>;
    let component: ContactsListComponent;
    let element;
    const getContactsElements = () => {
      return element.querySelectorAll('contact-card');
    };

    beforeEach(() => {
        mockContacts = CC_DATA;
        TestBed.configureTestingModule({
            declarations: [
                ContactsListComponent
            ],
            providers: [
                JworksContactsService
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(ContactsListComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it('should create the list component', () => {
        expect(component).toBeTruthy();
    });

    it('should show the same amount of contacts as in the mock', async(() => {
        component.contacts = mockContacts;
        fixture.autoDetectChanges();
        fixture.whenStable().then(() => {
          expect(getContactsElements().length).toBe(mockContacts.length);
        });
    }));
});
