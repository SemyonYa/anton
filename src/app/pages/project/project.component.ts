import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project';
import { DataService } from 'src/app/services/data.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  id: number;
  project: Project;
  rect: { top: number, width: number, left: number, right: number, bottom: number };
  constructor(
    private dataService: DataService,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.dataService.projects$
      .subscribe(
        ps => {
          if (ps) {
            console.log(ps);

            this.project = ps.find(p => p.id == this.id);
          }
        }
      );
    this.projectService.rect$
      .subscribe(
        r => {
          this.rect = r;
        }
      );
    console.log(`ID ${this.id}`);
  }

}
