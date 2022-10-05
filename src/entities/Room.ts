import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Video } from './Video';

@Entity('rooms')
export class Room {
  @PrimaryColumn()
  id: number;
  @Column({ type: 'text' })
  name: string;
  @OneToMany(() => Video, (video) => video.room)
  videos: Video[];
}
