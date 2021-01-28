import { Component, OnInit } from '@angular/core';
import { pageAnimation } from 'src/app/animations/page.animation';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  animations: [pageAnimation]
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
