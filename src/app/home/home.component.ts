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

  onLoadServers() {
    this.router.navigate(['/servers']);
  }
}
