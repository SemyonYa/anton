import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Menu } from './models/menu.enum';
import { DataService } from './services/data.service';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentRoute: string;
  isSmallLogo = false;
  title = 'anton';

  constructor(
    private router: Router,
    private menuService: MenuService,
    private dataService: DataService
  ) {
    dataService.getProjects();
    router.events.subscribe(
      e => {
        if (e instanceof NavigationEnd) {
          this.currentRoute = e.url;
          console.log(this.currentRoute);
          switch (e.url) {
            case '/':
              menuService.goTo(Menu.Home);
              break;
            case '/about':
              menuService.goTo(Menu.About);
              break;
            case '/concepts':
              menuService.goTo(Menu.Concepts);
              break;
            case '/contacts':
              menuService.goTo(Menu.Contacts);
              break;
            default:
              break;
          }
        }
      }
    );

    this.menuService.isSmallLogo$
      .subscribe(
        s => {
          this.isSmallLogo = s;
        }
      );
  }

  goHome() {
    if (this.currentRoute == '/') {
      this.menuService.goTo(Menu.Home);
    }
    this.router.navigateByUrl('/');
  }
}
