import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { Routing } from './route/app.routing';
import { AuthGuard } from './guard/auth.guard';
import { HomeModule } from './home/home.module';
import { HomeComponent} from './home/home.component';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
import { UserService} from './services/user.service';
import { GradeRecordService } from './services/grade-record.service';
// used to create fake backend
import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    Routing,
    Ng2SmartTableModule,
    CommonModule

  ],
  providers: [
    AuthGuard, 
    AlertService, 
    AuthenticationService,
    UserService,
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions,
    GradeRecordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
