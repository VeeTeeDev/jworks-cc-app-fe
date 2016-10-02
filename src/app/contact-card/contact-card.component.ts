import { Component, OnInit, Input} from '@angular/core';
import { Contact } from '../models/cc-contact';

@Component({
  selector: 'contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {

  @Input() contact: Contact;

  baseUrl = 'http://ec2-52-49-175-247.eu-west-1.compute.amazonaws.com:4201/';

  constructor() { }

  ngOnInit() {
  }
}
