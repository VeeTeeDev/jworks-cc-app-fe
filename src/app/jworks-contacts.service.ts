import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class JworksContactsService {

  constructor(private http: Http, @Inject('API_ENDPOINT') private apiEndpoint) { }

  getContacts () {
    return this.http.get(`${this.apiEndpoint}/jworks-contacts`)
                    .map(res => res.json())
                    .map(data => data.items);
  }
}
