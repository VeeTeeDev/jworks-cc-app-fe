import Promise = webdriver.promise.Promise;

export abstract class PageObject {
  navigateTo(path?: string): Promise<void> {
    let p = path || '/';
    return browser.get(p);
  }
}