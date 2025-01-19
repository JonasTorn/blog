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
import { EllipsisPipe } from "../pipes/ellipsis.pipe";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputGroupModule } from "primeng/inputgroup";
import {
	FormBuilder,
	FormGroup,
	MaxLengthValidator,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { Comment } from "./comment";
import { TextareaModule } from "primeng/textarea";

@Component({
	selector: "app-blog-post",
	imports: [
		DatePipe,
		ImageModule,
		Button,
		FieldsetModule,
		AvatarModule,
		Divider,
		Card,
		EllipsisPipe,
		FloatLabelModule,
		InputTextModule,
		InputGroupAddonModule,
		InputGroupModule,
		ReactiveFormsModule,
		TextareaModule,
	],
	templateUrl: "./blog-post.component.html",
	styleUrl: "./blog-post.component.css",
})
export class BlogPostComponent implements OnInit {
	blogPost?: BlogPost;
	comments: Comment[] = [];
	likeToggled: boolean = false;
	commentForm: FormGroup;
	constructor(
		private fb: FormBuilder,
		private blogPostService: BlogPostService,
		private route: ActivatedRoute
	) {
		this.commentForm = this.fb.group({
			author: "",
			content: ["", [Validators.minLength(0), Validators.maxLength(300)]],
		});
	}

	ngOnInit(): void {
		const postId = Number(this.route.snapshot.paramMap.get("id"));
		this.blogPost = this.blogPostService.getPostById(postId);
		if (this.blogPost) {
			this.comments = this.blogPost.comments;
		}
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
	saveComment(postId: number): void {
		if (this.commentForm.invalid) {
			return;
		}

		const newComment = new Comment(
			this.commentForm.value.name || "Anonymous",
			this.commentForm.value.content,
			Date.now() // Current timestamp for the comment
		);

		this.blogPostService.addComment(postId, newComment);

		this.commentForm.reset();
	}
}
