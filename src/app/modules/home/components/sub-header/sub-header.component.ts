import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  toggle() {
    /* this.sidebarService.toggle(true); */
    return false;
  }
  ngOnInit(): void {
  }

}
