import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AdminGalleryDetailsComponent } from './admin-gallery-details/admin-gallery-details.component';
import { AdminGalleryComponent } from './admin-gallery/admin-gallery.component';
import { AdminComponent } from './admin/admin.component';
import { BranchesComponent } from './branches/branches.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmploymentComponent } from './employment/employment.component';
import { EyedonationComponent } from './eyedonation/eyedonation.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';
import { LoginComponent } from './login/login.component';
import { MarriageComponent } from './marriage/marriage.component';

const routes: Routes = [
  { path: 'aboutus', component:  AboutComponent},
  { path: 'activites', component: ActivitiesComponent },
  { path: 'employment', component: EmploymentComponent },
  { path: 'eyedonation', component: EyedonationComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'joinus', component: JoinusComponent },
  { path: 'marriage', component: MarriageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'branches', component: BranchesComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'admin', component: AdminComponent },
  {
    path: 'admin-gallery',
    component: AdminGalleryComponent
  },
  {
    path: 'admin-gallery-details',
    component: AdminGalleryDetailsComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/joinus', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
