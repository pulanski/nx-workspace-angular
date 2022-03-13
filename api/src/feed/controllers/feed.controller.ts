import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { FeedService } from '../services/feed.service';
import { FeedPost } from '../services/models/post.interface';

@Controller('feed')
export class FeedController {
  constructor(private feedService: FeedService) {}

  @Post()
  create(@Body() feedPost: FeedPost): Observable<FeedPost> {
    return this.feedService.createPost(feedPost);
  }

  // @Get()
  // findAll(): Observable<FeedPost[]> {
  //   return this.feedService.findAllPosts();
  // }

  @Get()
  findSelected(
    @Query('take') take = 1,
    @Query('skip') skip = 0,
  ): Observable<FeedPost[]> {
    take = take > 20 ? 20 : take;
    return this.feedService.findPosts(take, skip);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body()
    feedPost: FeedPost,
  ): Observable<UpdateResult> {
    return this.feedService.updatePost(id, feedPost);
  }

  @Delete(':id')
  delete(
    @Param('id') id: number,
    @Body() feedPost: FeedPost,
  ): Observable<DeleteResult> {
    return this.feedService.deletePost(id);
  }
}
