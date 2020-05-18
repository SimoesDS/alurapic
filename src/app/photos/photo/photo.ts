export interface Photo {
    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComments: boolean;
    likes: string;
    comments: number;
    userId: number;
    total: number;
}
