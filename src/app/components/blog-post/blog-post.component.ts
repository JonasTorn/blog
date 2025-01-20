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
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { InputTextModule } from "primeng/inputtext";
import { Comment } from "./comment";
import { TextareaModule } from "primeng/textarea";
import { Toast } from "primeng/toast";
import { MessageService } from "primeng/api";


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
		Toast
	],
	templateUrl: "./blog-post.component.html",
	styleUrl: "./blog-post.component.css",
    providers: [MessageService]
})
export class BlogPostComponent implements OnInit {
	blogPost?: BlogPost;
	comments: Comment[] = [];
	likeToggled: boolean = false;
	commentForm: FormGroup;
	currentCharacterCount: number = 0; // Tracks the current character count
	maxCharacterCount: number = 500; // Default value for maximum characters
	constructor(
		private fb: FormBuilder,
		private blogPostService: BlogPostService,
		private route: ActivatedRoute,
		private messageService: MessageService
	) {
		this.commentForm = this.fb.group({
			author: "",
			content: [
				"",
				[Validators.minLength(0), Validators.maxLength(this.maxCharacterCount)],
			],
		});
	}

	ngOnInit(): void {
		const postId = Number(this.route.snapshot.paramMap.get("id"));
		this.blogPost = this.blogPostService.getPostById(postId);
		if (this.blogPost) {
			this.comments = this.blogPost.comments;
		}
		const contentControl = this.commentForm.get("content");
		if (contentControl) {
			// Extract maxlength dynamically (if it changes in future)
			const maxlengthValidator = contentControl.validator?.({} as any)?.[
				"maxlength"
			];
			if (maxlengthValidator) {
				this.maxCharacterCount = maxlengthValidator.requiredLength;
			}

			// Update current character count on value changes
			contentControl.valueChanges.subscribe((value) => {
				this.currentCharacterCount = value?.length || 0;
			});
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
    handleCommentSubmit(postId: number): void {
        this.saveComment(postId);
        this.showConfirmationMessage();
    }

	saveComment(postId: number): void {
		if (this.commentForm.invalid) {
			return;
		}

		const newComment = new Comment(
			this.commentForm.value.author || "Anonymous",
			this.commentForm.value.content,
			Date.now() // Current timestamp for the comment
		);

		this.blogPostService.addComment(postId, newComment);

		this.commentForm.reset();
	}
    showConfirmationMessage() {
        this.messageService.add({ severity: 'success', summary: 'Comment sent', key: 'br', life: 2000 });
    }
}
