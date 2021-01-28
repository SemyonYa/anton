import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { arrowLeftAnimation } from 'src/app/animations/arrow-left.animation';
import { arrowRightAnimation } from 'src/app/animations/arrow-right.animation';
import { projectBriefAnimation } from 'src/app/animations/project-brief.animation';
import { projectDescriptionAnimation } from 'src/app/animations/project-description.animation';
import { projectTitleAnimation } from 'src/app/animations/project-title.animation';
import { MENU_HEIGHT } from 'src/app/constants/constants';
import { Project } from 'src/app/models/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    projectBriefAnimation,
    projectDescriptionAnimation,
    projectTitleAnimation,
    arrowLeftAnimation,
    arrowRightAnimation,
  ]
})
export class ProjectComponent implements OnInit {
  @Input() project: Project;
  @Input() isOpened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  projects: Project[];
  isOpened = false;
  currentRect: { top: number, width: number, left: number, bottom: number };
  fullScreenBefore = false;
  fullScreenAfter = false;
  isFake = false;
  changeBlocked: boolean = false;

  // @ViewChild('title') titleElem: ElementRef;
  // @ViewChild('description') descriptionElem: ElementRef;
  // @ViewChild('img') imgElem: ElementRef;
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    if (this.isOpened$) {
      this.isOpened$
        .subscribe(
          o => {
            if (this.isOpened && !o) {
              this.close();
            }
            this.isOpened = o;
          }
        );
    }
  }

  ngOnInit(): void {
    if (this.currentRect) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'position', `fixed`);
      this.renderer.setStyle(this.elementRef.nativeElement, 'top', `${this.currentRect.top}px`);
      this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${this.currentRect.width}px`);
      this.renderer.setStyle(this.elementRef.nativeElement, 'left', `${this.currentRect.left}px`);
      this.renderer.setStyle(this.elementRef.nativeElement, 'bottom', `${this.currentRect.bottom}px`);
      this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '1s');
      // this.renderer.addClass(this.elementRef.nativeElement, 'fake');
      this.fullScreenBefore = true;
      setTimeout(() => {
        this.renderer.setStyle(this.elementRef.nativeElement, 'top', `${MENU_HEIGHT}px`);
        this.renderer.setStyle(this.elementRef.nativeElement, 'bottom', `0px`);
        this.renderer.setStyle(this.elementRef.nativeElement, 'left', `10px`);
        this.renderer.setStyle(this.elementRef.nativeElement, 'right', `10px`);
        this.renderer.setStyle(this.elementRef.nativeElement, 'width', `auto`);
        this.fullScreenAfter = true;
      }, 300);
    }
  }

  prev() {
    if (!this.changeBlocked) {
      this.changeBlocked = true;
      let imageElem = document.querySelector(`#image--${this.project.id}`);
      let titleElem = document.querySelector(`#title--${this.project.id}`);
      let descriptionElem = document.querySelector(`#description--${this.project.id}`);
      this.change(imageElem);
      this.change(titleElem);
      this.change(descriptionElem);
    }
  }

  next() {
    if (!this.changeBlocked) {
      this.changeBlocked = true;
      let imageElem = document.querySelector(`#image--${this.project.id}`);
      let titleElem = document.querySelector(`#title--${this.project.id}`);
      let descriptionElem = document.querySelector(`#description--${this.project.id}`);
      this.change(imageElem, false);
      this.change(titleElem, false);
      this.change(descriptionElem, false);
    }
  }

  change(elem: Element, isPrev: boolean = true) {
    this.renderer.setStyle(elem, 'transition', '.2s');
    this.renderer.setStyle(elem, 'opacity', '0');
    this.renderer.setStyle(elem, 'transform', `translateX(${25 * (isPrev ? 1 : -1)}px)`);
    const currentIndex = this.projects.indexOf(this.project);
    setTimeout(() => {
      this.renderer.setStyle(elem, 'transform', `translateX(${-100 * (isPrev ? 1 : -1)}px)`);
      this.renderer.setStyle(elem, 'background-size', '150% auto');
      this.renderer.setStyle(elem, 'transition', '.5s');
      setTimeout(() => {
        if (isPrev) {
          this.project = currentIndex > 0 ? this.projects[currentIndex - 1] : this.projects[this.projects.length - 1];
        } else {
          this.project = currentIndex < this.projects.length - 1 ? this.projects[currentIndex + 1] : this.projects[0];
        }
        this.renderer.setStyle(elem, 'opacity', '1');
        this.renderer.setStyle(elem, 'transform', 'translateX(0)');
        this.renderer.setStyle(elem, 'background-size', '100% auto');
        this.changeBlocked = false;
      }, 500);
    }, 200);
  }

  close() {
    console.log('CLOSE');
    this.renderer.setStyle(this.elementRef.nativeElement, 'opacity', '0');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'translateX(500px)');
  }

}
