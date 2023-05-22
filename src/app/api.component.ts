import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'api',
  template: '',
})
export class ApiComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    const response = fetch('https://www.deckofcardsapi.com/api/deck/new/')
    .then(response => console.log(response))


  }
}
