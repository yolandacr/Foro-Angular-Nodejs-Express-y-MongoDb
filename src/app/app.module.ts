import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { PanelModule } from './panel/panel.module';
import { MomentModule } from 'angular2-moment';
import { TopicsComponent } from './components/topics/topics.component';
import { TopicDetailComponent } from './components/topic-detail/topic-detail.component';
//Servicios
import { UserService } from "./services/user.service";
import { UserGuard } from "./services/user.guard";
import { NoIdentityGuard } from "./services/no.identity.guard";
import { UsersComponent } from './components/users/users.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserEditComponent,
    TopicsComponent,
    TopicDetailComponent,
    UsersComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    PanelModule,
    MomentModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    appRoutingProviders,
    UserGuard,
    UserService,
    NoIdentityGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
