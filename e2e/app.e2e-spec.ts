import { JworksCcAppFePage } from './app.po';

describe('jworks-cc-app-fe App', function() {
  let page: JworksCcAppFePage;

  beforeEach(() => {
    page = new JworksCcAppFePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
