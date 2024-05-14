import { Component, Input, OnInit } from '@angular/core';
import { Doctor } from '../../models/doctor';


@Component({
  selector: 'app-doctor-card',
  standalone: true,
  imports: [],
  templateUrl: './doctor-card.component.html',
  styleUrl: './doctor-card.component.css'
})
export class DoctorCardComponent {
  @Input() doctor: Doctor = new Doctor();

  getStars() {
    //this.doctor.reviewCount = '1235'
    this.doctor.rating = '5';
    const rate = parseInt(this.doctor.rating);
    return '★'.repeat(rate) + '☆'.repeat(5 - rate);
  }
}
