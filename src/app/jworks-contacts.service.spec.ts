/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { JworksContactsService } from './jworks-contacts.service';
import { Http } from '@angular/http';

describe('Service: JworksContacts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JworksContactsService,
        { provide: 'API_ENDPOINT', useValue: 'http://ec2-52-49-175-247.eu-west-1.compute.amazonaws.com:4201/api' }
        ]
    });
  });

  it('should ...', inject([JworksContactsService], (service: JworksContactsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get item', () => {
    let http: Http;
    const service = new JworksContactsService(http, 'API_ENDPOINT');
    let results;
    results = service.getContacts();
    expect(results).toBeDefined();
  });
});
