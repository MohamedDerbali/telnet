import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { StatsComponent } from './stats/stats.component';
import { RapportComponent } from './rapport/rapport.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ProjectsModalComponent } from './projects-modal/projects-modal.component';
import { ProjectsModalNameComponent } from './projects-modal-name/projects-modal-name.component';
import { ProjectsModalPasswordComponent } from './projects-modal-password/projects-modal-password.component';
import { ArchiveComponent } from './archive/archive.component';
import { ImportComponent } from './import/import.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    ProfileComponent,
    StatsComponent,
    RapportComponent,
    ProjectsModalComponent,
    ProjectsModalNameComponent,
    ProjectsModalPasswordComponent,
    ArchiveComponent,
    ImportComponent,
    CreateUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ProjectsModalComponent]
})
export class AppModule { }
