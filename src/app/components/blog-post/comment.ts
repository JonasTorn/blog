export class Comment {
	author: string;
	content: string;
	date: number;

	constructor(author: string, content: string, date: number) {
		this.author = author;
		this.content = content;
		this.date = date;
	}
}
