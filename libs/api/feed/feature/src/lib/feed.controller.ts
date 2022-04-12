import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { FeedService } from '../../../data-access/src/lib/feed.service';
import { FeedPost } from 'libs/shared/data-access/models/src/lib/feed-post';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() feedPost: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(feedPost);
  }

  @Get()
  findSelected(@Query('take') take = 1, @Query('skip') skip = 0): Observable<FeedPost[]> {
    take = take > 20 ? 20 : take;
    return this.feedService.findPosts(take, skip);
  }

  @Put(':id')
  update(@Param() id: number, @Body() feedPost: FeedPost): Observable<UpdateResult> {
    return this.feedService.updatePost(id, feedPost);
  }

  @Delete(':id')
  delete(@Param() id: number): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}
