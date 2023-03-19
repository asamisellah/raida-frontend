import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'raida-app';
  currentRoute: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      this.currentRoute = this.router.url === '/';
    });
  }
}
