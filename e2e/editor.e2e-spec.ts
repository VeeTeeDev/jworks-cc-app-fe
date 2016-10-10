import {DetailPage} from './detail.po';
import {EditorPage} from './editor.po';

describe('Editor Page', function () {
  let page: EditorPage;
  let pageName:string = 'my-awesome-website.org';

  beforeEach(() => {
      page = new EditorPage();
      page.navigateTo('contact/0/edit');      
  });

  it('should have a website field', () => {
      page.getWebsite()
      .isPresent()
      .then((isPresent: boolean)=> {
        expect(isPresent).toBeTruthy();
      });
  });

  it('should have a save button', () => {
      page.getSaveButton()
      .isPresent()
      .then((isPresent: boolean)=> {
        expect(isPresent).toBeTruthy();
      });
  });
 
  it('save new website', ()=> {
    let website = page.getWebsite();
    website.sendKeys(pageName);     
    page.clickOnSave().then(()=> {
      let detailPage = new DetailPage();
      detailPage.getWebsite().getText().then((val) => {
          console.log(val);
          expect(val).toEqual(pageName);
      });
        
    });
  });
});