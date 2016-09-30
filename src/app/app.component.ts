import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
