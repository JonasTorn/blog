import { BlogPostComment } from "./comment.model";

export class BlogPost {
	id: number;
	title: string;
	image: string;
	content: string;
	author: string;
	date: number;
	comments: BlogPostComment[];
	likes: number;
	likedByUser?: boolean;

	constructor(
		id: number,
		title: string,
		image: string,
		content: string,
		author: string,
		date: number,
		comments: BlogPostComment[] = [],
		likes: number,
		likedByUser: boolean = false
	) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.content = content;
		this.author = author;
		this.date = date;
		this.comments = comments;
		this.likes = likes;
		this.likedByUser = likedByUser;
	}
}


