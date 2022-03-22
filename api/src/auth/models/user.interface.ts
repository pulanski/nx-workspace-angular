import { Role } from './role.enum';
import { FeedPost } from 'src/feed/services/models/post.interface';

export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  role?: Role;
  feedPosts?: FeedPost[];
}
