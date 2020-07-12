import { Component, OnInit } from '@angular/core';
import { User } from '../../../../user';
import { USERS } from '../../../../core/mocks/mock-users';
import { UserService } from '../../../../core/services/user.service';
import { MessageService } from '../../../../core/services/message.service';
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';
import { NbWindowService } from '@nebular/theme';
import { FormComponent } from '../../components/form/form.component';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'], 
  /* template:`<app-form (open)='onOpen($event)'></app-form>` */
})

export class UsersComponent implements OnInit {

  users: User[];

  constructor(
    private UserService: UserService,
    private formBuilder: FormBuilder, 
    private windowService: NbWindowService,  
    private toastrService: NbToastrService
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
    this.windowService.open(FormComponent, { title: `Add User` });
  }

  onOpen(event:any){
    console.log(event)
  }

}
