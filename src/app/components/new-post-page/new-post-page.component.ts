import { Component } from "@angular/core";
import { Divider } from "primeng/divider";
import { FormsModule } from "@angular/forms";
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
	],
	templateUrl: "./new-post-page.component.html",
	styleUrl: "./new-post-page.component.css",
})
export class NewPostPageComponent {
	postTitle: string = "";
	postContent: string = "";
	postAuthor: string = "";

	constructor(private blogPostService: BlogPostService) {}

	savePost(): void {
		if (!this.postTitle || !this.postContent || !this.postAuthor) {
			alert("Please fill out all fields before saving.");
			return;
		}

		const newPost: BlogPost = {
			id: this.generateId(),
			title: this.postTitle,
			image: "",
			content: this.postContent,
			author: this.postAuthor,
			likes: 0,
			date: Date.now(),
		};

		this.blogPostService.addPost(newPost);

		this.postTitle = "";
		this.postContent = "";
		this.postAuthor = "";

		alert("Post saved successfully!");
	}

	private generateId(): number {
		return Date.now(); // Simple unique ID based on timestamp
	}
}
