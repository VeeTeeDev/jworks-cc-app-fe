import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Let\'s begin !!!';

  public loading = true;

  ngOnInit() {
    setTimeout(function() {
       this.loading = false;
    }.bind(this), 3000);
  }


}
