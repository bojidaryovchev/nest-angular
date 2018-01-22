import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() navigationClicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNavigationClicked(e: Event): void {
    const anchor: HTMLAnchorElement = e.target as HTMLAnchorElement;

    this.navigationClicked.emit(anchor.innerText);
  }

}
