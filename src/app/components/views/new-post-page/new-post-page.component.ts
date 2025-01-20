import { Component } from "@angular/core";
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
import { MessageService } from "primeng/api";
import { validateImageUrl } from "../../../shared/utils/image-validation";
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
	providers: [MessageService],
})
export class NewPostPageComponent {
	postForm: FormGroup;
	imagePreview: string | null = null;

	constructor(
		private fb: FormBuilder,
		private blogPostService: BlogPostService,
		private messageService: MessageService
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
			[], // New posts have no comments initially
			0, // Initial likes count
			false // Not liked by the user initially
		);

		// Using Object Literals:
		// (Old) Keeping for learning...
		//
		// const newPost: BlogPost = {
		// 	id: 0, //placeholder; Kommer att sättas av blog.service
		// 	title: this.postForm.value.title,
		// 	image: this.postForm.value.image,
		// 	content: this.postForm.value.content,
		// 	author: this.postForm.value.author,
		// 	date: Date.now(),
		//  comments: [],
		// 	likes: 0,
		//  likedByUser: false,
		// };

		this.blogPostService.addPost(newPost);

		this.postForm.reset();
		this.imagePreview = null;
		this.showConfirmationMessage();
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
	showConfirmationMessage() {
		this.messageService.add({
			severity: "success",
			summary: "New blog post saved",
			key: "br",
			life: 2000,
		});
	}
}
