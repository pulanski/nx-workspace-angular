/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'nx-workspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  title = 'LinkedIn';

  constructor(private searchService: NbSearchService) {}

  ngOnInit(): void {
    console.log('HomeComponent.ngOnInit()');
  }

  openSearch(): void {
    this.searchService.activateSearch('');
  }
}
