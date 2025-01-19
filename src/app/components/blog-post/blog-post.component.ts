import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogPost } from "./blog-post";
import { BlogPostService } from "./blog-post.service";
import { DatePipe } from "@angular/common";
import { ImageModule } from "primeng/image";
import { Button } from "primeng/button";
import { FieldsetModule } from "primeng/fieldset";
import { AvatarModule } from "primeng/avatar";
import { Divider } from "primeng/divider";
import { Card } from "primeng/card";

@Component({
	selector: "app-blog-post",
	imports: [DatePipe, ImageModule, Button, FieldsetModule, AvatarModule, Divider, Card],
	templateUrl: "./blog-post.component.html",
	styleUrl: "./blog-post.component.css",
})
export class BlogPostComponent implements OnInit {
	blogPost?: BlogPost;
	likeToggled: boolean = false;
	constructor(
		private blogPostService: BlogPostService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		const postId = Number(this.route.snapshot.paramMap.get("id"));
		this.blogPost = this.blogPostService.getPostById(postId);
	}
	toggleLike(): void {
		if (this.blogPost) {
			this.blogPost.likedByUser = !this.blogPost.likedByUser; // Toggle the likedByUser state
			this.blogPost.likes += this.blogPost.likedByUser ? 1 : -1; // Adjust like count
			this.likeToggled = true;
		}
	}
	resetAnimation(): void {
		this.likeToggled = false; // Reset animation state after it completes
	}
}
