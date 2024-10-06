import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  users: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://randomuser.me/api/?results=5').subscribe((response: any) => {
      this.users = response.results;
    });
  }

}
