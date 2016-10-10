import {ListPage} from './list.po';
import {DetailPage} from './detail.po';

describe('List Page', function () {
  let page: ListPage;

  beforeEach(() => {
    page = new ListPage();
    page.navigateTo();
  });

  it('should have a contact list', ()=> {
    page.getContactsList()
      .isPresent()
      .then((isPresent: boolean)=> {
        expect(isPresent).toBeTruthy();
      });
  });

  it('should have at least one contact card', ()=> {
    page.getContactCards()
      .isPresent()
      .then((isPresent: boolean)=> {
        expect(isPresent).toBeTruthy();
      });
  });

  it('should have a contact as child', ()=> {
    page.getFirstContact()
      .isPresent()
      .then((isPresent: boolean)=> {
        expect(isPresent).toBeTruthy();
      });
  });

  it('should show contact details on click', ()=> {
    let contactCardAvatar = page.getFirstContactAnchor().element(by.css('img'));
    contactCardAvatar.click().then(()=> {
        let detailPage = new DetailPage();
        detailPage.getContainer()
          .isPresent()
          .then((detailsPresent: boolean)=> {
            expect(detailsPresent).toBeTruthy();
          });
    });
  });
});