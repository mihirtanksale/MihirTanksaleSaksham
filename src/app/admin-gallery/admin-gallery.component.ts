import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-admin-gallery',
  templateUrl: './admin-gallery.component.html',
  styleUrls: ['./admin-gallery.component.css']
})

export class AdminGalleryComponent implements OnInit {
  galleryForm: FormGroup;
  imageFile: File = null;
  imageTitle = '';
  imageDesc = '';
  
  matcher = new MyErrorStateMatcher();

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.galleryForm = this.formBuilder.group({
      imageFile : [null, Validators.required],
      imageTitle : [null, Validators.required],
      imageDesc : [null, Validators.required]
    });
  }
  onFormSubmit(): void {
    
    this.api.addGallery(this.galleryForm.value, this.galleryForm.get('imageFile').value._files[0])
      .subscribe((res: any) => {
        if (res.body) {
          this.router.navigate(['/admin-gallery-details']);
        }
      }, (err: any) => {
        console.log(err);
      });
  }

}

