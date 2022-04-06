/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NbWindowService } from '@nebular/theme';

@Component({
  selector: 'nx-workspace-start-post',
  templateUrl: './start-post.component.html',
  styleUrls: ['./start-post.component.scss'],
})
export class StartPostComponent implements OnInit {
  @ViewChild('startPostWindowTemplate', { read: TemplateRef })
  startPostWindowTemplate!: TemplateRef<HTMLElement>;

  constructor(private windowService: NbWindowService) {}

  openWindowWithBackdrop() {
    this.windowService.open(this.startPostWindowTemplate, { title: 'Start a post', hasBackdrop: true });
  }

  ngOnInit(): void {}
}
