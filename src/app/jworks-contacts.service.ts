import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JworksContactsService {

  constructor(private http: Http, @Inject('API_ENDPOINT') private apiEndpoint) { }

  getContacts () {
    return this.http.get(`${this.apiEndpoint}/jworks-contacts`)
                    .map(res => res.json())
                    .map(data => data.items);
  }

  search(term: string) {
    return this.http.get(`${this.apiEndpoint}/search?text=${term}`)
                    .map(res => res.json())
                    .map(data => data.items);
  }

  getContact (id: number | string) {
    return this.http.get(`${this.apiEndpoint}/jworks-contacts/${id}`)
                    .map(res => res.json().item);
  }

}
