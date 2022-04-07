/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'nx-workspace-advertising',
  templateUrl: './advertising.component.html',
  styleUrls: ['./advertising.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
