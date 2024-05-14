import { Component, OnInit, } from '@angular/core';
import { DoctorsService } from '../../services/doctors.service';
import { NgFor } from '@angular/common';
import { DoctorCardComponent } from '../doctor-card/doctor-card.component';


@Component({
  selector: 'app-doctors-list',
  standalone: true,
  imports: [NgFor, DoctorCardComponent],
  templateUrl: './doctors-list.component.html',
  styleUrl: './doctors-list.component.css'
})
export class DoctorsListComponent implements OnInit {
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
