import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/Post';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private httpClient: HttpClient) {}

  getSelectedPosts(params) {
    return this.httpClient.get<Post[]>('http://localhost:3000/api/feed' + params);
  }
}
