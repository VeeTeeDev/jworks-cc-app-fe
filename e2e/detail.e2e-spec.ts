import {ListPage} from './list.po';
import {DetailPage} from './detail.po';
import {EditorPage} from './editor.po';

describe('Detail Page', function () {
  let page: DetailPage;

  beforeEach(() => {
      page = new DetailPage();
      page.navigateTo('contact/0');      
  });

  it('should have an edit button', () => {
      page.getEditButton()
      .isPresent()
      .then((isPresent: boolean)=> {
        expect(isPresent).toBeTruthy();
      });
  });
 
  it('should show contact editor on click', ()=> {
        let editButton = page.getEditButton();
        editButton.click().then(()=> {
            let editorPage = new EditorPage();
            editorPage.getContainer()
            .isPresent()
            .then((detailsPresent: boolean)=> {
                expect(detailsPresent).toBeTruthy();
            });
        });
  });
});
