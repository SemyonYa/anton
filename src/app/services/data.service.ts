import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects$ = new BehaviorSubject<Project[]>(null);

  brief = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa et, rerum impedit error atque pariatur illum
  accusamus molestias unde praesentium doloremque omnis hic molestiae sapiente iusto vitae mollitia veniam a?
  Optio ipsum maiores eligendi incidunt sit dolore nemo ullam, minima asperiores saepe error non nobis, pariatur
  consequatur itaque delectus culpa, ducimus officiis.`;
  description = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa et, rerum impedit error atque pariatur illum
  accusamus molestias unde praesentium doloremque omnis hic molestiae sapiente iusto vitae mollitia veniam a?
  Optio ipsum maiores eligendi incidunt sit dolore nemo ullam, minima asperiores saepe error non nobis, pariatur
  consequatur itaque delectus culpa, ducimus officiis. Nobis molestias quidem provident quas. Enim, quibusdam fugit.
  Libero, odit eos ducimus expedita accusantium magni ullam, adipisci voluptates nostrum nam itaque numquam
  voluptatum, autem dolor incidunt id quis ipsa culpa quidem commodi? Numquam repudiandae natus debitis modi
  eligendi!`;

  constructor(private http: HttpClient) { }

  getProjects() {
    const projects: Project[] = [0, 1, 2, 3, 4, 5, 6].map(p => new Project(
      p,
      `Title of Project #${p}`,
      this.brief,
      this.description,
      `Large City #${p}`,
      2020 - p,
      `/assets/img/0${p}.jpg`,
      p
    )
    );
    this.projects$.next(projects);
  }
}
