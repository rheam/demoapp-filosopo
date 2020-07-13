import { Component, OnInit } from '@angular/core';
import { User } from '../../../../user';
import { USERS } from '../../../../core/mocks/mock-users';
import { UserService } from '../../../../core/services/user.service';
import { NbWindowService, NbToastrService, NbDialogService} from '@nebular/theme';
import { FormComponent } from '../../components/form/form.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private UserService: UserService,
    private windowService: NbWindowService,  
    private toastrService: NbToastrService,
    private dialogService: NbDialogService
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  
  getUsers(): void {
    this.UserService.getUsers()
    .subscribe(users => this.users = users);
  }

  delete(user: User): void {
    this.users = this.users.filter(h => h !== user);
    this.UserService.deleteUser(user).subscribe(
      user=>{
        console.log(user)
        this.showToast('top-right', 'success', 'Successfully deleted!');
      }
    );
  }

  showToast(position, status, message) {
    this.toastrService.show( 
      status || 'Success',
      message,
      { position, status }
    );
  }
  openWindow() {
    this.dialogService.open(FormComponent)
      .onClose.subscribe(name =>  name && this.users.push(name));
  }

}
