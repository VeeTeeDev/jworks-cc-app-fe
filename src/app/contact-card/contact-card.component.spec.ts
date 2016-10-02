/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { ContactCardComponent } from './contact-card.component';
import { Contact } from '../models/cc-contact';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('Component: ContactCard', () => {
  it('should create an instance', () => {
    let component: ContactCardComponent;
    beforeEach(() => {
        component = new ContactCardComponent;
    });

    it('Should be defined after creation', () => {
        expect(component).toBeTruthy();
    });

  });
});

// Shallow test
// Test that the component gets rendered correctly.
fdescribe('Component shallow: ContactCardComponent', () => {
    let mockContact: Contact;
    let fixture: ComponentFixture<ContactCardComponent>;
    let component: ContactCardComponent;
    let element;
    const getTitleElement = () => {
      return element.querySelector('md-card-title');
    };
    const getSubTitleElement = () => {
      return element.querySelectorAll('md-card-subtitle > span');
    };

    beforeEach(() => {
        mockContact = {
            address: {
                city: 'Diest',
                country: 'BE',
                street: 'Halderstraat',
                zip: '323'
            },
            birthday: '27 mei',
            email: 'test@mail.be',
            id: 1,
            image: 'url.com',
            name: 'Dan',
            phone: '829348923',
            website: 'fds.com'
        };
        TestBed.configureTestingModule({
            declarations: [
                ContactCardComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(ContactCardComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it('should create the contact-card component', () => {
        expect(component).toBeTruthy();
    });

    it('should show the correct name, phonenumber and email (using async and autoDetectChanges)', async(() => {
        component.contact = mockContact;
        fixture.autoDetectChanges();
        fixture.whenStable().then(() => {
          expect(getTitleElement().textContent).toContain(mockContact.name);
          expect(getSubTitleElement()[0].textContent.indexOf(mockContact.phone)).toBeGreaterThan(0);
          expect(getSubTitleElement()[1].textContent.indexOf(mockContact.email)).toBeGreaterThan(0);
        });
    }));
});
