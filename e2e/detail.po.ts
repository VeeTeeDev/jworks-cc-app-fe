import Promise = webdriver.promise.Promise;
import ElementFinder = protractor.ElementFinder;
import {PageObject} from "./po";
export class DetailPage extends PageObject{
  
  private container;
  private name;
  private website;
  private editButton;
  
  constructor() {
    super();
    this.container = element(by.css('app-contact-detail'));
    this.name = element(by.css('md-card-title md-headline'));
    this.website = element(by.css('.js-website'));
    this.editButton = element.all(by.css('.js-edit')).get(0);
  
  }

  getContainer():ElementFinder {
      return this.container;
  }

  getEditButton():ElementFinder {
      return this.editButton;
  }

  getName():String{
    return this.name.getText();
  }

  clickOnEdit():Promise<void>{
    return this.editButton.click();
  }

  getWebsite():ElementFinder {
      return this.website;
  }
}