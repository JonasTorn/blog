import { Component, inject } from "@angular/core";
import { Divider } from "primeng/divider";
import {
	FormBuilder,
	FormGroup,
	FormsModule,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { Editor } from "primeng/editor";
import { BlogPostService } from "../../../core/services/blog-post.service";
import { BlogPost } from "../../../shared/models/blog-post.model";
import { InputText } from "primeng/inputtext";
import { Card } from "primeng/card";
import { Button } from "primeng/button";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputGroupModule } from "primeng/inputgroup";
import { Message } from "primeng/message";
import { CommonModule } from "@angular/common";
import { Toast } from "primeng/toast";
import { validateImageUrl } from "../../../shared/utils/image-validation";
import { NotificationService } from "../../../shared/services/notification.service";
import { Router } from "@angular/router";
@Component({
	selector: "app-new-post-page",
	imports: [
		Divider,
		FormsModule,
		Editor,
		Card,
		Button,
		FloatLabelModule,
		InputGroupAddonModule,
		InputGroupModule,
		ReactiveFormsModule,
		Message,
		InputText,
		CommonModule,
		Toast,
	],
	templateUrl: "./new-post-page.component.html",
	styleUrl: "./new-post-page.component.css",
})
export class NewPostPageComponent {
	postForm: FormGroup;
	imagePreview: string | null = null;
	newPostId: number | null = null;

	router = inject(Router);
	constructor(
		private fb: FormBuilder,
		private blogPostService: BlogPostService,
		private notificationService: NotificationService
	) {
		this.postForm = this.fb.group({
			title: ["", [Validators.required]],
			author: ["", [Validators.required]],
			image: [""],
			content: ["", [Validators.required]],
		});
	}

	savePost(): void {
		if (this.postForm.invalid) {
			return;
		}

		const newPost = new BlogPost(
			0, // Temporary placeholder for ID; assigned by the service
			this.postForm.value.title,
			this.postForm.value.image,
			this.postForm.value.content,
			this.postForm.value.author,
			Date.now(), // Current timestamp for the post
			[], // No comments initially
			0, // Initial likes count
			false // Not liked by the user initially
		);

		const newPostId = this.blogPostService.addPost(newPost);

		this.postForm.reset();
		this.imagePreview = null;
		this.showConfirmationMessage(newPostId);
		console.log("Post saved successfully!");
	}
	validateImageUrl(): void {
		const url = this.postForm.get("image")?.value;
		if (!url || !validateImageUrl(url)) {
			this.imagePreview = null;
			return;
		}
		this.imagePreview = url; // Valid image URL
	}
	showConfirmationMessage(postId: number): void {
		this.notificationService.showSuccess(
			"New blog post saved",
			"",
			"newPostSuccess"
		);
		this.newPostId = postId; // Store the ID for navigation
	}
	goToNewPost(postId: number | null): void {
		if (postId === null || postId === undefined) {
			console.error("Cannot navigate: postId is null or undefined");
			return;
		}
		this.router.navigate([`/post/${postId}`]);
		console.log("Navigating to the new blog post with ID: ${postId}`...");
	}
}
