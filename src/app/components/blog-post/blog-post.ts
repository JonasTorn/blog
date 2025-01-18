export class BlogPost {
	id: number;
	title: string;
	image: string;
	content: string;
	author: string;
	likes: number;
	date: number;

	constructor(
		id: number,
		title: string,
		image: string,
		content: string,
		author: string,
		likes: number,
		date: number
	) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.content = content;
		this.author = author;
		this.likes = likes;
		this.date = date;
	}
}
