import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    const type: {[key: string]: string} = {};

    this.route.params.subscribe((params: typeof type) => {
      this.user = {
        id: +params.id,
        name: params.name
      };
    });

    this.route.queryParams.subscribe((params: typeof type) => {
    });
  }

}
