import { Component } from '@angular/core';
import { DoctorsListComponent } from '../doctors-list/doctors-list.component';
import { CategoriesComponent } from '../categories/categories.component';
import { MainPhotoComponent } from '../main-photo/main-photo.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [DoctorsListComponent, CategoriesComponent, MainPhotoComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  constructor() { }



}
