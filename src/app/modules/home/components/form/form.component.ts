import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators , FormBuilder} from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../user';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],

})
export class FormComponent implements OnInit {
  @Output() open: EventEmitter<any> = new EventEmitter();
  private index: number = 0;
  profileForm: FormGroup;

  loading = false;
  submitted = false;
  constructor(
    private UserService: UserService, 
    private toastrService: NbToastrService, 
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group ({
      usr_fullname: ['', Validators.required],
      usr_email: ['', [Validators.required, Validators.email]],
      usr_address: ['', Validators.required],
    });
  }

  get f() { return this.profileForm.controls; }

  add() {
    this.submitted =true;
    this.loading = true;
    if (this.profileForm.invalid) { 
     return;
    }
    
    this.UserService.addUser(this.profileForm.value as User)
      .subscribe(user => {
        this.showToast('top-right', 'success');
        this.loading = false;
        this.open.emit(user);
    }); 
  }

  showToast(position, status) {
    this.index += 1;
    this.toastrService.show(
      status || 'Success',
      `Success Post!`,
      { position, status });
  }

}
