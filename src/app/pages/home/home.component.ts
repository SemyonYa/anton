import { Component, ElementRef, OnInit, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { projectInfoAnimation } from 'src/app/animations/project-info.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [projectInfoAnimation]
})
export class HomeComponent implements OnInit {
  opened: number = 0;
  animationTime = 1000;
  menuHeight = 60;

  @ViewChild('projectInfo') projectInfoTemplate: TemplateRef<any>;

  constructor(private host: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  // TODO: split on funcs
  open(item: number, e: MouseEvent) {
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
        this.renderer.setStyle(newProject, 'top', `${this.menuHeight}px`);
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
        console.log("🚀 ~ file: home.component.ts ~ line 51 ~ HomeComponent ~ setTimeout ~ this.projectInfoTemplate.elementRef.nativeElement", this.projectInfoTemplate.elementRef)

        this.renderer.listen(newProject, 'click', (e) => {
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
