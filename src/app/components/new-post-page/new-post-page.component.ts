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
import { BlogPostService } from "../blog-post/blog-post.service";
import { BlogPost } from "../blog-post/blog-post";
import { InputTextModule } from "primeng/inputtext";
import { Card } from "primeng/card";
import { Button } from "primeng/button";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputGroupModule } from "primeng/inputgroup";

@Component({
	selector: "app-new-post-page",
	imports: [
		Divider,
		FormsModule,
		Editor,
		InputTextModule,
		Card,
		Button,
		FloatLabelModule,
		InputGroupAddonModule,
		InputGroupModule,
		ReactiveFormsModule,
	],
	templateUrl: "./new-post-page.component.html",
	styleUrl: "./new-post-page.component.css",
})
export class NewPostPageComponent {
	postForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private blogPostService: BlogPostService
	) {
		this.postForm = this.fb.group({
			title: ["", Validators.required],
			author: ["", Validators.required],
			content: ["", Validators.required],
		});
	}

	savePost(): void {
		if (this.postForm.invalid) {
			return;
		}

		const newPost: BlogPost = {
			id: 0, //placeholder; Kommer att sättas av blog.service
			title: this.postForm.value.title,
			image: "",
			content: this.postForm.value.content,
			author: this.postForm.value.author,
			likes: 0,
			date: Date.now(),
		};

		this.blogPostService.addPost(newPost);

		this.postForm.reset();

		console.log("Post saved successfully!");
	}
}
