import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  constructor() { }

  toggle() {
    /* this.sidebarService.toggle(true); */
    return false;
  }
  ngOnInit(): void {
  }

}
