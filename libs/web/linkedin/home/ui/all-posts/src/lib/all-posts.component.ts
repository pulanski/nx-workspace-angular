/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { BehaviorSubject, catchError, from, of } from 'rxjs';
import { FeedPost } from '../../../../../../../../libs/shared/data-access/models/src/lib/feed-post';
import { PostService } from '../../../../../../../../libs/web/linkedin/home/data-access/src/lib/post.service';

@Component({
  selector: 'nx-workspace-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllPostsComponent implements OnInit {
  // posts$ = new BehaviorSubject<FeedPost[]>([]);

  constructor(private postService: PostService) {}

  posts$ = this.postService.posts$.pipe(
    catchError((err) => {
      console.log('inside component error handler');
      console.log(err);
      return of([]);
    })
  );

  ngOnInit(): void {
    // this.postService.init();
  }

  getPosts(): void {
    // this.postService.getFeedPosts();
  }

  loadNext(): void {}
}
