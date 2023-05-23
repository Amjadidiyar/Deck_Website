import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'api',
  template: '',
})
export class ApiComponent implements OnInit {
  
  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    const response = await fetch('https://www.deckofcardsapi.com/api/deck/new/')
    const data = await response.json();
    console.log(data);

  }
}
