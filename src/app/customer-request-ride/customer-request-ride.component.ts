import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '../models/models';

@Component({
  selector: 'app-customer-request-ride',
  templateUrl: './customer-request-ride.component.html',
  // styleUrls: ['./customer-request-ride.component.css'],
})
export class CustomerRequestRideComponent implements OnInit {
  requestRideForm!: FormGroup;
  originLatitude: number | undefined;
  originLongitude: number | undefined;
  destinationLatitude: number | undefined;
  destinationLongitude: number | undefined;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.requestRideForm = this.fb.group({
      origin: ['', Validators.required],
      destination: ['', Validators.required],
    });
    // this.loadGoogleMaps();
  }

  // loadGoogleMaps() {
  //   this.mapsAPILoader.load().then(() => {
  //     const autocompleteOrigin = new google.maps.places.Autocomplete(
  //       document.getElementById('origin')
  //     );
  //     const autocompleteDestination = new google.maps.places.Autocomplete(
  //       document.getElementById('destination')
  //     );
  //     autocompleteOrigin.addListener('place_changed', () => {
  //       const place = autocompleteOrigin.getPlace();
  //       this.originLatitude = place.geometry.location.lat();
  //       this.originLongitude = place.geometry.location.lng();
  //     });
  //     autocompleteDestination.addListener('place_changed', () => {
  //       const place = autocompleteDestination.getPlace();
  //       this.destinationLatitude = place.geometry.location.lat();
  //       this.destinationLongitude = place.geometry.location.lng();
  //     });
  //   });
  // }

  // onSubmit() {
  //   const originLocation: Location = {
  //     latitude: this.originLatitude,
  //     longitude: this.originLongitude,
  //   };
  //   const destinationLocation: Location = {
  //     latitude: this.destinationLatitude,
  //     longitude: this.destinationLongitude,
  //   };
  //   // Here, you can send the ride request to the backend with the originLocation and destinationLocation.
  // }
}
