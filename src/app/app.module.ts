import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MdCoreModule } from '@angular2-material/core';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { MdListModule } from '@angular2-material/list';
import { MdInputModule } from '@angular2-material/input';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdCheckboxModule } from '@angular2-material/checkbox';
import { MdProgressBarModule } from '@angular2-material/progress-bar';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdRadioModule } from '@angular2-material/radio';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdTabsModule } from '@angular2-material/tabs';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header';
import { ContactCardComponent } from './contact-card';
import { ContactsListComponent } from './contacts-list';
import { ContactDetailComponent } from './contact-detail';

import { JworksContactsService } from './jworks-contacts.service';

import { routing } from './app.routes';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime'; 
import 'rxjs/add/operator/distinctUntilChanged'; 
import { Subject } from 'rxjs/Subject';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactCardComponent,
    ContactsListComponent,
    ContactDetailComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCoreModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    MdInputModule,
    MdToolbarModule,
    MdCheckboxModule,
    MdProgressBarModule,
    MdProgressCircleModule,
    MdRadioModule,
    MdSidenavModule,
    MdTabsModule
  ],
  providers: [
    MdIconRegistry,
    JworksContactsService,
    HttpModule,
    { provide: 'API_ENDPOINT', useValue: 'http://ec2-52-49-175-247.eu-west-1.compute.amazonaws.com:4201/api' },
    { provide: 'API_BASE', useValue: 'http://ec2-52-49-175-247.eu-west-1.compute.amazonaws.com:4201/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
