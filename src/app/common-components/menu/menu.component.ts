import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.enum';
import { MenuService } from 'src/app/services/menu.service';
import { portfolioMenuAnimation } from '../../animations/portfolio-menu.animation'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [portfolioMenuAnimation]
})
export class MenuComponent implements OnInit {
  isMenuActive = false;
  isPortfolio = false;
  activeItem: Menu = Menu.Home;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.isMenuActive$
      .subscribe(
        a => {
          this.isMenuActive = a;
        }
      );
    this.menuService.isPortfolioActive$
      .subscribe(
        p => {
          this.isPortfolio = p;
        }
      );
    this.menuService.activeItem$
      .subscribe(
        i => {
          this.activeItem = i;
        }
      );
  }

  goTo(id: number) {
    this.menuService.goTo(id);
  }

}
