/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.scss'],
})
export class AllPostsComponent implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  queryParams: string;
  allLoadedPosts: Post[] = [];
  numberOfPosts = 5;
  skipPosts = 0;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getPosts(false, '');
  }

  getPosts(isInitialLoad: boolean, event: any) {
    if (this.skipPosts === 20) {
      event.target.disabled = true;
    }

    this.queryParams = `?take=${this.numberOfPosts}&skip=${this.skipPosts}`;

    this.postService.getSelectedPosts(this.queryParams).subscribe(
      (posts: Post[]) => {
        for (let postIndex = 0; postIndex < posts.length; postIndex++) {
          this.allLoadedPosts.push(posts[postIndex]);
        }

        if (isInitialLoad) {
          event.target.complete();
        }

        this.skipPosts += 5;
      },
      (error) => {
        console.log(error);
      }
    );
    // if (isInitialLoad) {
    //   event.target.complete();
    // }
  }

  loadData(event) {
    this.getPosts(true, event);
  }
}
