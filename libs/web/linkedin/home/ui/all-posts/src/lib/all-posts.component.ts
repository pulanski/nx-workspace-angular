/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FeedPost } from '../../../../../../../../libs/shared/data-access/models/src/lib/feed-post';

@Component({
  selector: 'nx-workspace-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPostsComponent implements OnInit {
  posts: FeedPost[] = [
    {
      id: 1,
      title: 'Post 1',
      body: 'Post 1 body',
      createdAt: new Date(),
    },
    {
      id: 1,
      title: 'Post 1',
      body: 'Post 2 body',
      createdAt: new Date(),
    },
    {
      id: 1,
      title: 'Post 1',
      body: 'Post 3 body',
      createdAt: new Date(),
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
