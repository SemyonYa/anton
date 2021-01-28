import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Menu } from '../models/menu.enum';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // items: MenuItem[] = [
  //   new MenuItem(Menu.Main, 'Главная', '', false),
  //   new MenuItem(Menu.About, 'О нас', 'about', false),
  //   new MenuItem(Menu.Portfolio, 'Портфолио', 'portfolio', false),
  //   new MenuItem(Menu.Concepts, 'Концепты', 'concepts', false),
  //   new MenuItem(Menu.Contacts, 'Контакты', 'contacts', false),
  // ];

  isMenuActive$ = new BehaviorSubject<boolean>(false);
  isSmallLogo$ = new BehaviorSubject<boolean>(false);
  isPortfolioActive$ = new BehaviorSubject<boolean>(false);
  activeItem$ = new BehaviorSubject<Menu>(Menu.Home);

  constructor(private location: Location) { }

  goTo(id: Menu) {
    this.activeItem$.next(id);
    this.isPortfolioActive$.next(id == Menu.Portfolio);
    this.isMenuActive$.next(id != Menu.Home);
    this.isSmallLogo$.next(id == Menu.Concepts || id == Menu.Portfolio);

    // if (id == Menu.Portfolio) {
    //   this.location.go('/portfolio');
    // }
  }
}
