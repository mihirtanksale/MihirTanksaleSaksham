/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-gallery-details',
  templateUrl: './admin-gallery-details.component.html',
  styleUrls: ['./admin-gallery-details.component.css']
})
export class AdminGalleryDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Gallery } from './../gallery';

@Component({
  selector: 'app-admin-gallery-details',
  templateUrl: './admin-gallery-details.component.html',
  styleUrls: ['./admin-gallery-details.component.css']
})
export class AdminGalleryDetailsComponent implements OnInit {
  Gallery:any=[];
  constructor(private apiService:ApiService){
    this.readGallery();
  }
  readGallery(){
    this.apiService.getGallery().subscribe((data) => {
    this.Gallery = data;
    })
  }
  deleteGallerybyId(employee, index) {
    if(window.confirm('Are you sure?')) {
    this.apiService.deleteGalleryById(employee._id).subscribe((data) => {
    this.Gallery.splice(index, 1);
      })
      }
  }

  ngOnInit(){}

  /*gallery: Gallery = { _id: '', imageUrl: '', imageTitle: '', imageDesc: '', uploaded: null };
  isLoadingResults = true;
  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.getGalleryDetails(this.route.snapshot.paramMap.get('id'));
  }

  getGalleryDetails(id: string): void {
    this.api.getGalleryById(id)
      .subscribe((data: any) => {
        this.gallery = data;
        console.log(this.gallery);
        this.isLoadingResults = false;
      });
  }*/

}



