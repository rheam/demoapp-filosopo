import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './modules/home/pages/users/users.component';
import { UserDetailComponent } from './modules/home/components/user-detail/user-detail.component';
import { MessagesComponent } from './modules/home/components/messages/messages.component';
import { DashboardComponent } from './modules/home/components/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderService } from './core/services/loader.service';

import { NbEvaIconsModule } from '@nebular/eva-icons';
import { TabComponent } from './modules/home/components/tab/tab.component';
import { MyLoaderComponent } from './modules/home/components/my-loader/my-loader.component';
import { FormComponent } from './modules/home/components/form/form.component';
import { NotFoundComponent } from './modules/home/pages/404/not-found/not-found.component';
import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbListModule, 
  NbCardModule, 
  NbTabsetModule, 
  NbActionsModule, 
  NbSidebarModule,  
  NbIconModule, 
  NbButtonModule,
  NbMenuModule,
  NbInputModule,
  NbSpinnerModule,
  NbToastrModule,
  NbTooltipModule, 
  NbWindowModule,
  NbUserModule,
  NbDialogModule, 
} from '@nebular/theme';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    MessagesComponent,
    DashboardComponent,
    TabComponent,

    MyLoaderComponent,
    FormComponent,
    NotFoundComponent,
 
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbListModule,
    NbCardModule,
    NbTabsetModule,
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbIconModule,
    NbButtonModule,
    NbMenuModule,
    NbInputModule,
    NgbModule,
    NbSpinnerModule,
    NbToastrModule.forRoot(),
    NbTooltipModule,
    NbWindowModule.forRoot(),
    NbUserModule,
    RouterModule.forRoot([]),
    NbDialogModule.forRoot()
  ],

  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
