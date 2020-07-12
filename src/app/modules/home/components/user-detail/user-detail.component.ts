import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { User } from '../../../../user';

import { UserService }  from '../../../../core/services/user.service';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  loading = true;
  user: User;
  private index: number = 0;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => {
        this.user = user});
      this.loading = false;
  }

  goBack(): void {
    this.location.back();
  } 

  save(): void {
    this.loading = true;
    this.userService.updateUser(this.user)
      .subscribe((resp) => {   
        console.log(resp)     
        this.showToast('top-right', 'success');
        this.loading = false;
      });
  }

  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `Success Update!`,
      { position, status });
  }

}
