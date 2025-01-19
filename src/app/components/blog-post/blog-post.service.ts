import { Injectable } from "@angular/core";
import { BlogPost } from "./blog-post";
import { Comment } from "./comment";

@Injectable({
	providedIn: "root",
})
export class BlogPostService {
	private blogPosts: BlogPost[] = [
		new BlogPost(
			1,
			"First Post",
			"/images/DSC00117.jpg",
			"<p>This is the first post. <strong>Bold text</strong> and <em>italic text</em></p>",
			"John Doe",
			new Date("2024-06-20").getTime(),
			[
				new Comment(
					"Jonas",
					"Testar att kommentera :)",
					new Date("2024-06-22").getTime()
				),
				new Comment(
					"Anonymous",
					"Testar en lång kommentar %%#)#% Cras eros orci, accumsan eget ante vel, pharetra vehicula enim. Integer mollis fermentum ex sit amet posuere. Morbi a condimentum ex. Sed risus ante, scelerisque quis luctus vel, ullamcorper at est. Nam id leo vestibulum, hendrerit dolor eu, maximus diam. Fusce urna est, convallis laoreet posuere id, rhoncus at ipsum. Sed ante metus, viverra in orci ac, hendrerit scelerisque magna. Ut a tellus non magna fringilla lobortis a vel odio. In eu feugiat lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam aliquam tortor felis, non vestibulum erat dignissim a. Donec at fringilla metus. Curabitur et nunc at eros commodo volutpat. Pellentesque faucibus eleifend nisi, nec sagittis purus semper a. In viverra scelerisque arcu, ac pharetra augue feugiat eu. Aliquam posuere urna nec massa sollicitudin viverra. Curabitur tempor ligula at erat auctor interdum. Donec in mi venenatis, ultrices magna ac, interdum ipsum. Sed volutpat leo a nisi aliquet, et mattis massa luctus. Nunc sit amet sagittis augue. Cras at vestibulum ipsum. Ut maximus elementum eros, et vulputate tortor blandit a. Nam molestie dignissim mattis. Donec sit amet dignissim mi, vitae pellentesque ante. Aliquam id odio eget ante dapibus sagittis eu id justo. Sed ac urna blandit, blandit nibh ac, elementum nisl. In at semper orci, mattis fringilla nunc. Mauris diam sem, tempor nec ex ut, pellentesque tempus erat. Nunc ornare lacus tortor, eget consequat arcu efficitur ac. In vel rhoncus purus. Maecenas vel felis non tortor interdum hendrerit.",
					new Date("2025-01-19").getTime()
				),
			],
			4,
			false
		),
		new BlogPost(
			2,
			"In the mountains...",
			"/images/DSC00083.jpg",
			"Integer rutrum enim eget accumsan tristique. Cras eros orci, accumsan eget ante vel, pharetra vehicula enim. Integer mollis fermentum ex sit amet posuere. Morbi a condimentum ex. Sed risus ante, scelerisque quis luctus vel, ullamcorper at est. Nam id leo vestibulum, hendrerit dolor eu, maximus diam. Fusce urna est, convallis laoreet posuere id, rhoncus at ipsum. Sed ante metus, viverra in orci ac, hendrerit scelerisque magna. Ut a tellus non magna fringilla lobortis a vel odio. In eu feugiat lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam aliquam tortor felis, non vestibulum erat dignissim a. Donec at fringilla metus. Curabitur et nunc at eros commodo volutpat. Pellentesque faucibus eleifend nisi, nec sagittis purus semper a. In viverra scelerisque arcu, ac pharetra augue feugiat eu. Aliquam posuere urna nec massa sollicitudin viverra. Curabitur tempor ligula at erat auctor interdum. Donec in mi venenatis, ultrices magna ac, interdum ipsum. Sed volutpat leo a nisi aliquet, et mattis massa luctus. Nunc sit amet sagittis augue. Cras at vestibulum ipsum. Ut maximus elementum eros, et vulputate tortor blandit a. Nam molestie dignissim mattis. Donec sit amet dignissim mi, vitae pellentesque ante. Aliquam id odio eget ante dapibus sagittis eu id justo. Sed ac urna blandit, blandit nibh ac, elementum nisl. In at semper orci, mattis fringilla nunc. Mauris diam sem, tempor nec ex ut, pellentesque tempus erat. Nunc ornare lacus tortor, eget consequat arcu efficitur ac. In vel rhoncus purus. Maecenas vel felis non tortor interdum hendrerit.",
			"Jonas",
			new Date("2024-06-25").getTime(),
			[
				new Comment(
					"Johan",
					"Intressant! Kommer att följa :)",
					new Date("2025-06-22").getTime()
				),
				new Comment("Anonymous", "Kul!", new Date("2025-06-22").getTime()),
			],
			15,
			false
		),
		new BlogPost(
			3,
			"Gotland",
			"/images/DSC00879-2.jpg",
			"Donec tempor purus non sagittis efficitur. Proin finibus scelerisque dui, ut ultricies tortor volutpat blandit. Donec dignissim ultricies eleifend. Phasellus non ipsum a urna pharetra vehicula dapibus et arcu. Integer bibendum interdum lacus. Nulla quis ligula tincidunt, viverra nulla sed, interdum nunc. Integer at ultrices urna. Morbi blandit, tellus sed aliquam tempor, nibh lacus dictum lacus, a accumsan velit dolor non tortor. Duis porta interdum est a mollis. Nam aliquet malesuada mi in fringilla. Nullam consectetur ipsum eget volutpat tempus. Sed pharetra lacus id congue accumsan. Suspendisse in quam aliquam, elementum augue a, lobortis nulla. Quisque tincidunt massa velit, id efficitur sapien lacinia vel. Nulla et auctor dui. Sed luctus sed tortor non efficitur. Praesent ut diam at lectus consequat pretium ut sit amet enim. Ut maximus nibh quam, id fringilla massa pretium placerat. Praesent porta id est id lobortis. Sed a est non est scelerisque posuere quis commodo sem. In tempor blandit nisl non eleifend. Sed mattis, nulla sed laoreet elementum, nibh eros commodo mi, vitae cursus dui justo non eros. Sed eget posuere eros, eu fermentum lacus. Morbi sapien mauris, ornare nec hendrerit ac, semper id justo. Integer rutrum enim eget accumsan tristique. Cras eros orci, accumsan eget ante vel, pharetra vehicula enim. Integer mollis fermentum ex sit amet posuere. Morbi a condimentum ex. Sed risus ante, scelerisque quis luctus vel, ullamcorper at est. Nam id leo vestibulum, hendrerit dolor eu, maximus diam. Fusce urna est, convallis laoreet posuere id, rhoncus at ipsum. Sed ante metus, viverra in orci ac, hendrerit scelerisque magna. Ut a tellus non magna fringilla lobortis a vel odio. In eu feugiat lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam aliquam tortor felis, non vestibulum erat dignissim a.",
			"Erik",
			new Date("2024-11-02").getTime(),
			[],
			25,
			false
		),
	];
	getAllPosts(): BlogPost[] {
		return [...this.blogPosts].sort((a, b) => b.date - a.date);
	}
	getPostById(id: number): BlogPost | undefined {
		return this.blogPosts.find((post) => post.id === id);
	}
	addPost(newPost: BlogPost): void {
		this.blogPosts.push(newPost);
	}
	addComment(postId: number, comment: Comment): void {
		const post = this.getPostById(postId);
		if (post) {
			post.comments.push(comment);
		} else {
			console.error("post not found...");
		}
	}
	private generateId(): number {
		return Date.now();
		// Används inte. Nya inlägg skapar ID med Date.now redan.
		// Behövs annan id-skapare så ersätt "Date.now()"
	}
}
