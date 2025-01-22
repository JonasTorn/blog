import { Injectable } from "@angular/core";
import { BlogPost } from "../../shared/models/blog-post.model";
import { BLOG_POSTS } from "../../shared/mock-data/BLOG_POSTS";
import { BlogPostComment } from "../../shared/models/comment.model";

@Injectable({
	providedIn: "root",
})
export class BlogPostService {
	private blogPosts: BlogPost[] = [...BLOG_POSTS];

	getAllPosts(): BlogPost[] {
        // Hämtar blogginlägg och sorterar efter datum. Nyast högst upp
		return [...this.blogPosts].sort((a, b) => b.date - a.date);
	}
	getPostById(id: number): BlogPost | undefined {
		return this.blogPosts.find((post) => post.id === id);
	}
	addPost(newPost: BlogPost): number {
        // Skapar ID till nytt inlägg OCH returnerar nya ID't 
        // för att kunna användas av ex. direktnavigering
		const id = this.generateId();
		newPost.id = id;
		this.blogPosts.push(newPost);
        return id;
	}
	deletePost(postId: number): void {
		const index = this.blogPosts.findIndex((post) => post.id === postId);
		if (index > -1) {
			this.blogPosts.splice(index, 1);
		}
	}
	addComment(postId: number, newComment: BlogPostComment): void {
		const post = this.getPostById(postId);
		if (post) {
			post.comments.push(newComment);
		} else {
			console.error("post not found...");
		}
	}
	private generateId(): number {
        // Skapar ID. Räcker med "date" för blogginlägg.
        // Till kommentarer kan annat behövas.
		return Date.now();
	}
	toggleLike(postId: number): void {
        // "Togglar" ett inlägg som "gillat".
        // I verkligt scenario hanteras detta på "användaren" som kräver login. Inte på inlägget
		const post = this.getPostById(postId);
		if (!post) {
			return;
		}
		post.likedByUser = !post.likedByUser;
		post.likes += post.likedByUser ? 1 : -1;
	}
}
