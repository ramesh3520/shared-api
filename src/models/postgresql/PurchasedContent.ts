import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';

@Entity('user_purchases')
export class UserPurchase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'uuid', nullable: false })
    userId: string;

    @OneToMany(() => PurchasedPost, purchasedPost => purchasedPost.userPurchase, { cascade: true })
    purchasedPosts: PurchasedPost[];

    @OneToMany(() => PurchasedAlbum, purchasedAlbum => purchasedAlbum.userPurchase, { cascade: true })
    purchasedAlbums: PurchasedAlbum[];

    @OneToMany(() => PurchasedVideo, purchasedVideo => purchasedVideo.userPurchase, { cascade: true })
    purchasedVideos: PurchasedVideo[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
}

@Entity('purchased_posts')
export class PurchasedPost {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => UserPurchase, userPurchase => userPurchase.purchasedPosts, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_purchase_id' })
    userPurchase: UserPurchase;

    @Column({ type: 'uuid', nullable: false })
    modelId: string;

    @Column({ type: 'uuid', nullable: false })
    postId: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    purchasedAt: Date;
}

@Entity('purchased_albums')
export class PurchasedAlbum {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => UserPurchase, userPurchase => userPurchase.purchasedAlbums, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_purchase_id' })
    userPurchase: UserPurchase;

    @Column({ type: 'uuid', nullable: false })
    modelId: string;

    @Column({ type: 'uuid', nullable: false })
    albumId: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    purchasedAt: Date;
}

@Entity('purchased_videos')
export class PurchasedVideo {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => UserPurchase, userPurchase => userPurchase.purchasedVideos, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_purchase_id' })
    userPurchase: UserPurchase;

    @Column({ type: 'uuid', nullable: false })
    modelId: string;

    @Column({ type: 'uuid', nullable: false })
    videoId: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    purchasedAt: Date;
}
