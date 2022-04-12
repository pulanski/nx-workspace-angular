import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { FeedPost } from 'libs/shared/data-access/models/src/lib/feed-post';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { FeedPostEntity } from './feed.entity';

@Injectable()
export class FeedService {
  constructor(@InjectRepository(FeedPostEntity) private readonly feedPostRepository: Repository<FeedPostEntity>) {}

  createPost(feedPost: FeedPost): Observable<FeedPost> {
    return from(this.feedPostRepository.save(feedPost));
  }

  findPosts(take: number, skip: number): Observable<FeedPost[]> {
    return from(this.feedPostRepository.find({ take, skip }));
  }

  updatePost(id: number, feedPost: FeedPost): Observable<UpdateResult> {
    throw new Error('Method not implemented.');
  }

  deletePost(id: number): Observable<DeleteResult> {
    throw new Error('Method not implemented.');
  }
}
