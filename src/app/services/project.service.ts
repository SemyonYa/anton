import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  project$ = new BehaviorSubject<Project>(null);
  rect$ = new BehaviorSubject<{ top: number, width: number, left: number, right: number, bottom: number }>(null);

  // get rect(): { top: number, width: number, left: number, right: number, bottom: number } {
  //   return this._rect;
  // }

  // set rect(rect: { top: number, width: number, left: number, right: number, bottom: number }) {
  //   this._rect = rect;
  // }

  constructor() { }
}
