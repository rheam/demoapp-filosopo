import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { UserService } from '../../../../core/services/user.service';
import { User } from '../../../../user';
import { NbToastrService, NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public event: EventEmitter<any> = new EventEmitter();
  profileForm: FormGroup;
  
  loading = false;
  submitted = false;

  constructor(
    private UserService: UserService, 
    private toastrService: NbToastrService, 
    private formBuilder: FormBuilder,
    protected dialogRef: NbDialogRef<any>
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
        this.dialogRef.close(user);
    }); 
  }

  showToast(position, status) {
    this.toastrService.show(
      status || 'Success',
      `Success Post!`,
      { position, status });
  }

  triggerEvent(item: string) {
    this.event.emit({ data: item , res:200 });
  }

}
