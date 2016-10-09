import { TestBed } from '@angular/core/testing';
import { routing } from './app.routes';

describe('Router tests', () => {
  beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [routing],
        providers: [
          routing,
         { provide: 'API_BASE', useValue: 'http://ec2-52-49-175-247.eu-west-1.compute.amazonaws.com:4201/'}
        ]
    });
  });

  // it('Should be able to navigate to list', done => {
  //   const router = TestBed.get(RouterModule);
  //   router.navigate(['/']).then(() => {
  //     expect(location.path()).toBe('/');
  //     done();
  //   }).catch(e => done.fail(e));
  // });

  // it('Should be able to navigate to a contact', done => {
  //   const router = TestBed.get(RouterModule);
  //   router.navigate(['contact/2']).then(() => {
  //     expect(location.path()).toBe('/contact');
  //     done();
  //   }).catch(e => done.fail(e));
  // });
});
