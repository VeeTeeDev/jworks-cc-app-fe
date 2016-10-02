/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { Contact } from '../models/cc-contact';
import { NO_ERRORS_SCHEMA } from '@angular/core';


describe('Component: Header', () => {

  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent;
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });

  it('should have Jworks Contacts App as title', () => {
    expect(component.title).toBe('Jworks Contacts App');
  });

});

// Shallow test
// Test that the component gets rendered correctly.
fdescribe('Component shallow: HeaderComponent', () => {
    let mockContact: Contact;
    let fixture: ComponentFixture<HeaderComponent>;
    let component: HeaderComponent;
    let element;
    const getTitleElement = () => {
        return element.querySelector('md-toolbar');
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderComponent
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it('should create the toolbar', () => {
        expect(component).toBeTruthy();
    });

    it('should show the correct element with title (using async and autoDetectChanges)', async(() => {
        fixture.autoDetectChanges();
        fixture.whenStable().then(() => {
          expect(getTitleElement()).toBeDefined();
          expect(getTitleElement().textContent).toContain(component.title);
        });
    }));
});
