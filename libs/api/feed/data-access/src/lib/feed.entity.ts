import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feed_post')
export class FeedPostEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  body!: string;

  @CreateDateColumn()
  createdAt!: Date;

  // @ManyToOne(() => UserEntity, (userEntity) => userEntity.feedPosts)
  // author: UserEntity;
}
