import { Injectable } from '@angular/core';
import { CC_DATA } from './data/cc-contacts';

@Injectable()
export class JworksContactsService {

  constructor() { }

  getContacts () {
    return CC_DATA;
  }
}
