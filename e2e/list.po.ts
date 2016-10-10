import Promise = webdriver.promise.Promise;
import ElementFinder = protractor.ElementFinder;
import {PageObject} from "./po";
export class ListPage extends PageObject{
  
  private contactsList;
  private firstContactCard; 
  private contactCards;
  private firstLink;

  constructor() {
    super();
    this.contactsList = element(by.css('app-contacts-list'));
    this.contactCards = element(by.css('app-contact-card'));
    this.firstContactCard = element.all(by.css('app-contact-card')).get(0);
    this.firstLink =  element.all(by.css('app-contact-card')).get(0).all('a').get(0);
  }

  getContactsList():ElementFinder{
    return this.contactsList;
  }

  getFirstContact():ElementFinder{
    return this.firstContactCard;
  }

  getFirstContactAnchor(): ElementFinder {
    return this.getFirstContact().all(by.css('a')).get(0);
  }

  getContactCards():ElementFinder{
    return this.contactCards;
  }

}