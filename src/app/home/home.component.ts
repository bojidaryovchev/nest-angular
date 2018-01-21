import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  onTestServer() {
    const request: XMLHttpRequest = new XMLHttpRequest();

    request.onreadystatechange = () => {
        if (request.readyState === XMLHttpRequest.DONE) {
        }
    };

    request.open('GET', '/api/users', true);
    request.send(null);
  }

  onLoadServers() {
    this.router.navigate(['/servers']);
  }
}
