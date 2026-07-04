export interface Announcement {

    id: number;

    title: string;

    message: string;

    publishDate: Date;

    expiresOn?: Date;
}