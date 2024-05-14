import { Component, OnInit, } from '@angular/core';
import { DoctorsService } from '../../services/doctors.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-categories-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.css'
})
export class CategoriesListComponent implements OnInit {
  maxStars: number = 5;
  constructor(public DoctorsService: DoctorsService) { }

  ngOnInit() {
    this.DoctorsService.getDoctors().subscribe(data => {
      console.log("API CALL ENDED");
      console.log(data);

      this.DoctorsService.DoctorsList = data;
    }
    );
  }

}
