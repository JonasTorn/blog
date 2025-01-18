import { Component, OnInit } from "@angular/core";
import { BlogPost } from "../blog-post/blog-post";
import { BlogPostService } from "../blog-post/blog-post.service";
import { CardModule } from 'primeng/card';
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
@Component({
	selector: "app-blog-posts-list",
	imports: [CardModule, CommonModule, RouterLink],
	templateUrl: "./blog-posts-list.component.html",
	styleUrl: "./blog-posts-list.component.css",
})
export class BlogPostsListComponent implements OnInit {
	blogPosts: BlogPost[] = [];

	constructor(private blogPostService: BlogPostService) {}

    ngOnInit(): void {
        this.blogPosts = this.blogPostService.getAllPosts();
    }
}
