import { Injectable } from "@angular/core";
import { BlogPost } from "./blog-post";

@Injectable({
	providedIn: "root",
})
export class BlogPostService {
	private blogPosts: BlogPost[] = [
		new BlogPost(
			1,
			"First Post",
			"../blog-post/images/jeremy-bishop-dvACrXUExLs-unsplash.jpg",
			"This is the first post.",
			"John Doe",
			4,
			new Date().toISOString()
		),
		new BlogPost(
			2,
			"Second Blog Post",
			"../blog-post/images/jeremy-bishop-dvACrXUExLs-unsplash.jpg",
			"This is the content of the second blog post.",
			"Author 2",
			25,
			new Date().toISOString()
		),
		new BlogPost(
			3,
			"Third Blog Post",
			"../blog-post/images/jeremy-bishop-dvACrXUExLs-unsplash.jpg",
			"This is the content of the third blog post.",
			"Author 3",
			15,
			new Date().toISOString()
		),

	];
    getAllPosts(): BlogPost[] {
        return this.blogPosts;
    }
    getPostById(id: number): BlogPost | undefined {
        return this.blogPosts.find((post) => post.id === id);
    }
    addPost(newPost: BlogPost): void {
        this.blogPosts.push(newPost);
    }
}
