import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styleUrls: ['./concepts.component.scss'],
  animations: [pageAnimation]
})
export class ConceptsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
