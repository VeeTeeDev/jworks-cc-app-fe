/* tslint:disable:no-unused-variable */
import { TestBed, async, inject } from '@angular/core/testing';
import { JworksContactsService } from './jworks-contacts.service';
import { CC_DATA } from './data/cc-contacts';

describe('Service: JworksContacts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JworksContactsService]
    });
  });

  it('should ...', inject([JworksContactsService], (service: JworksContactsService) => {
    expect(service).toBeTruthy();
  }));

  it('should get item', () => {
    const service = new JworksContactsService();
    let results;
    results = service.getContacts();
    expect(results.length).toEqual(CC_DATA.length);
  });
});
