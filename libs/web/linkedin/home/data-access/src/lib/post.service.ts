/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FeedPost } from 'libs/shared/data-access/models/src/lib/feed-post';
import { BehaviorSubject, catchError, Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  private postsUrl = 'http://localhost:3333/api/feed';

  constructor(private httpClient: HttpClient) {}

  // private posts$ = new BehaviorSubject<FeedPost[]>([]);

  posts$ = this.httpClient.get<FeedPost[]>(this.postsUrl).pipe(tap(console.log));

  // public init(): void {
  //   this.httpClient.get<FeedPost[]>('http://localhost:3333/api/feed').subscribe((posts) => {
  //     this.posts$.next(posts);
  //   });
  // }

  // public getFeedPosts(): Observable<FeedPost[]> {
  //   // return this.httpClient.get<FeedPost[]>('http://localhost:3333/api/feed');
  //   return this.posts$;
  // }
}
