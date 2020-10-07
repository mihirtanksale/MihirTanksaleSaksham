import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { EmploymentComponent } from './employment/employment.component';
import { MarriageComponent } from './marriage/marriage.component';
import { EyedonationComponent } from './eyedonation/eyedonation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChartsModule } from 'ng2-charts';
import { BranchesComponent } from './branches/branches.component';
import { CountUpModule } from 'ngx-countup';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminGalleryComponent } from './admin-gallery/admin-gallery.component';
import { AdminGalleryDetailsComponent } from './admin-gallery-details/admin-gallery-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './api.service';

import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialFileInputModule } from 'ngx-material-file-input';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ActivitiesComponent,
    EmploymentComponent,
    MarriageComponent,
    EyedonationComponent,
    GalleryComponent,
    JoinusComponent,
    LoginComponent,
    HomeComponent,
    BranchesComponent,
    ContactusComponent,
    AdminComponent,
    AdminGalleryComponent,
    AdminGalleryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ChartsModule,
    CountUpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MaterialFileInputModule
  ],
  providers: [ ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}