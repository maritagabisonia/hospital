import { CategoriesService } from '../../services/categories.service';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { DoctorsListComponent } from '../doctors-list/doctors-list.component';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor, DoctorsListComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  constructor(public CategoriesService: CategoriesService) { }

  ngOnInit() {
    this.CategoriesService.getCategories().subscribe(data => {
      console.log("API CALL ENDED");
      console.log(data);

      this.CategoriesService.categoryList = data;
    }
    );
  }

}
