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
		return [...this.blogPosts].sort((a, b) => b.date - a.date);
	}
	getPostById(id: number): BlogPost | undefined {
		return this.blogPosts.find((post) => post.id === id);
	}
	addPost(newPost: BlogPost): void {
		const id = this.generateId();
		newPost.id = id;
		this.blogPosts.push(newPost);
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
		return Date.now();
	}
	toggleLike(postId: number): void {
		const post = this.getPostById(postId);
		if (!post) {
			return;
		}
		post.likedByUser = !post.likedByUser;
		post.likes += post.likedByUser ? 1 : -1;
	}
}
