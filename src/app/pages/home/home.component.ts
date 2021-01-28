import { Component, ComponentFactoryResolver, ComponentRef, ElementRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pageAnimation } from 'src/app/animations/page.animation';
import { projectBriefAnimation } from 'src/app/animations/project-brief.animation';
import { ProjectComponent } from 'src/app/common-components/project/project.component';
import { MENU_HEIGHT } from 'src/app/constants/constants';
import { Menu } from 'src/app/models/menu.enum';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [pageAnimation, projectBriefAnimation]
})
export class HomeComponent implements OnInit {
  projects: Project[] = [];
  opened: number = 0;
  projectRef: ComponentRef<ProjectComponent>;
  animationTime: number = 1000;
  isPortfolio: boolean = false;

  @ViewChild('list') listElem: ElementRef;
  @ViewChild('fakeProject', { read: ViewContainerRef }) fakeProjectRef: ViewContainerRef;

  constructor(
    private dataService: DataService,
    private menuService: MenuService,
    private host: ElementRef,
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
  ) {
    this.menuService.isPortfolioActive$
      .subscribe(
        p => {
          if (this.isPortfolio && !p) {
            this.closeProject();
          }
          this.isPortfolio = p;
        }
      );
  }

  ngOnInit(): void {
    this.dataService.getProjects();
    this.dataService.projects$.subscribe(
      ps => {
        this.projects = ps;
      }
    );
  }

  openProject(project: Project, e: MouseEvent) {
    this.menuService.goTo(Menu.Portfolio);
    const currentRect = (e.currentTarget as any).getBoundingClientRect();
    document.querySelector('body').style.overflow = 'hidden';

    this.fakeProjectRef.clear();
    let projectComponent = this.resolver.resolveComponentFactory(ProjectComponent);
    this.projectRef = this.fakeProjectRef.createComponent(projectComponent);
    this.projectRef.instance.project = project;
    this.projectRef.instance.projects = this.projects;
    this.projectRef.instance.currentRect = {
      top: currentRect.top,
      width: currentRect.width,
      left: currentRect.left,
      bottom: window.innerHeight - currentRect.bottom
    };
    this.projectRef.instance.isOpened$.next(true);
    this.hideItems();
  }

  closeProject() {
    this.projectRef.instance.isOpened$.next(false);
    setTimeout(() => {
      this.fakeProjectRef.clear();
      this.showItems();
    }, 600);
  }

  hideItems() {
    this.renderer.setStyle(this.listElem.nativeElement, 'opacity', '0');
    setTimeout(() => {
      this.renderer.setStyle(this.listElem.nativeElement, 'transform', 'translateY(30px)');
    }, 1000);
  }

  showItems() {
    this.renderer.setStyle(this.listElem.nativeElement, 'opacity', '1');
    this.renderer.setStyle(this.listElem.nativeElement, 'transform', 'translateY(0px)');
  }

  // TODO: split on funcs
  _open(item: number, e: MouseEvent) {
    this.menuService.goTo(Menu.Portfolio);

    this.opened = this.opened == item ? 0 : item;
    const currentRect = (e.currentTarget as any).getBoundingClientRect();
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout(() => {
      let newProject = this.renderer.createElement('div');
      this.renderer.addClass(newProject, 'list-item');
      this.renderer.addClass(newProject, 'fixed');
      this.renderer.setStyle(newProject, 'top', `${currentRect.top}px`);
      this.renderer.setStyle(newProject, 'width', `${currentRect.width}px`);
      this.renderer.setStyle(newProject, 'left', `${currentRect.left}px`);
      let newProjectImg = this.renderer.createElement('div');
      this.renderer.addClass(newProjectImg, 'img');
      this.renderer.setStyle(newProjectImg, 'background-image', `url(/assets/img/0${item}.jpg)`)
      let newProjectText = this.renderer.createElement('div');
      this.renderer.addClass(newProjectText, 'text');
      this.renderer.appendChild(this.host.nativeElement, newProject);
      this.renderer.appendChild(newProject, newProjectImg);
      this.renderer.appendChild(newProject, newProjectText);
      setTimeout(() => {
        this.renderer.setStyle(newProject, 'top', `${MENU_HEIGHT}px`);
        this.renderer.setStyle(newProject, 'bottom', '0');
        this.renderer.setStyle(newProject, 'left', '0');
        this.renderer.setStyle(newProject, 'right', '0');
        this.renderer.setStyle(newProject, 'width', '100%');
        this.renderer.addClass(newProject, 'after');

        let p = this.renderer.createElement('p');
        const text = this.renderer.createText('qweqweqweqw eqwe dgffg dfg');
        this.renderer.appendChild(p, text);
        setTimeout(() => {
          this.renderer.appendChild(newProject, p);
        }, this.animationTime);

        this.renderer.listen(newProject, 'click', (e) => {
          this.menuService.goTo(Menu.Home);

          this.renderer.setStyle(newProject, 'top', `${currentRect.top}px`);
          this.renderer.setStyle(newProject, 'width', `${currentRect.width}px`);
          this.renderer.setStyle(newProject, 'left', `${currentRect.left}px`);
          this.renderer.setStyle(newProject, 'bottom', `${window.innerHeight - currentRect.bottom}px`);
          this.renderer.removeClass(newProject, 'after');
          setTimeout(() => {
            this.renderer.removeChild(this.host.nativeElement, newProject);
            document.querySelector('body').style.overflow = 'auto';
            this.opened = 0;
          }, this.animationTime);
        });
      }, 100);

    }, 300);
  }



}
