/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ContactDetailComponent } from './contact-detail.component';
import { Router, ActivatedRoute } from '@angular/router';
import { JworksContactsService } from '../jworks-contacts.service';

describe('Component: ContactDetail', () => {

  beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          JworksContactsService,
         { provide: 'API_BASE', useValue: 'http://ec2-52-49-175-247.eu-west-1.compute.amazonaws.com:4201/'}
        ]
    });
  });

  it('should create an instance', () => {
    let router: Router;
    let activatedRoute: ActivatedRoute;
    let service: JworksContactsService;
    let component = new ContactDetailComponent(service, router, activatedRoute, 'API_BASE');
    expect(component).toBeTruthy();
  });
});
