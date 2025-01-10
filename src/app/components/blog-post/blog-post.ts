export class BlogPost {
	id: number;
	title: string;
	image: string;
	content: string;
	author: string;
	date: string;

	// add likes & dislikes?

	constructor(
		id: number,
		title: string,
		image: string,
		content: string,
		author: string,
		date: string
	) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.content = content;
		this.author = author;
		this.date = date;
	}
}
