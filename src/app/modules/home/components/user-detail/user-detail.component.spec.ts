import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from '@angular/common/http';
import { NbToastrService } from '@nebular/theme';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        NbToastrService
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
