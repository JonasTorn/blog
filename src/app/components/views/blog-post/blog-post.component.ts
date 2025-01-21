import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BlogPost } from "../../../shared/models/blog-post.model";
import { BlogPostService } from "../../../core/services/blog-post.service";
import { DatePipe } from "@angular/common";
import { ImageModule } from "primeng/image";
import { Button } from "primeng/button";
import { FieldsetModule } from "primeng/fieldset";
import { AvatarModule } from "primeng/avatar";
import { Divider } from "primeng/divider";
import { Card } from "primeng/card";
import { EllipsisPipe } from "../../../pipes/ellipsis.pipe";
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
import { Router } from "@angular/router";
import { TextareaModule } from "primeng/textarea";
import { Toast } from "primeng/toast";
import { BlogPostComment } from "../../../shared/models/comment.model";
import { NotificationService } from "../../../shared/services/notification.service";
import { AdminService } from "../../../core/services/admin.service";

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
		Toast,
	],
	templateUrl: "./blog-post.component.html",
	styleUrl: "./blog-post.component.css",
})
export class BlogPostComponent implements OnInit {
	router = inject(Router);	
	blogPost?: BlogPost;
	comments: BlogPostComment[] = [];
	likeToggled: boolean = false;
	commentForm: FormGroup;
	currentCharacterCount: number = 0; // Tracks the current character count
	maxCharacterCount: number = 500; // Default value for maximum characters
	constructor(
		private fb: FormBuilder,
		private blogPostService: BlogPostService,
		private route: ActivatedRoute,
		private notificationService: NotificationService,
		public adminService: AdminService
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
		if (!this.blogPost) {
			return;
		}
		this.blogPostService.toggleLike(this.blogPost.id);
		this.likeToggled = true;
	}
	resetAnimation(): void {
		this.likeToggled = false; // Reset animation state after it completes
	}

	saveComment(postId: number): void {
		if (this.commentForm.invalid) {
			return;
		}

		const newComment = new BlogPostComment(
			this.commentForm.value.author || "Anonymous",
			this.commentForm.value.content,
			Date.now() // Current timestamp for the comment
		);

		this.blogPostService.addComment(postId, newComment);
		this.showConfirmationMessage();
		this.commentForm.reset();
	}
	showConfirmationMessage(): void {
		this.notificationService.showSuccess("Comment sent", "", "br", 2000);
	}
	deletePost(): void {
		// showConfirmModal ???
		// If confirm > Remove post > navigate to homePage
		if (confirm("Are you sure you want to delete this post?")) {
			if (this.blogPost) {
				this.blogPostService.deletePost(this.blogPost.id); // Implement delete logic in the service
				this.notificationService.showSuccess("Post deleted successfully!");
				this.router.navigate(["/"]); // Redirect to the home page
			}
		}
	}
}
