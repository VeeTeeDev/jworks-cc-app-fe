import Promise = webdriver.promise.Promise;
import ElementFinder = protractor.ElementFinder;
import {PageObject} from "./po";
export class EditorPage extends PageObject{
  
  private container;
  private website;
  private saveButton;

  constructor() {
    super();
    this.container = element(by.css('app-contact-editor'));
    this.website = element(by.css('.js-website input'));
    this.saveButton = element(by.css('.js-save'));
  }

  getContainer():ElementFinder {
      return this.container;
  }

  getWebsite():ElementFinder{
    return this.website;
  }

  getWebsiteText():String{
    return this.website.getText();
  }

  getSaveButton():ElementFinder {
      return this.saveButton;
  }

  clickOnSave():Promise<void>{
    return this.saveButton.click();
  }
}