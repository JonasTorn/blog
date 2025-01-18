import { Component, OnInit } from "@angular/core";
import { BlogPost } from "../blog-post/blog-post";
import { BlogPostService } from "../blog-post/blog-post.service";
import { CardModule } from 'primeng/card';
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Divider } from "primeng/divider";
import { EllipsisPipe } from "../pipes/ellipsis.pipe";
@Component({
	selector: "app-blog-posts-card",
	imports: [CardModule, CommonModule, RouterLink, EllipsisPipe],
	templateUrl: "./blog-posts-card.component.html",
	styleUrl: "./blog-posts-card.component.css",
})
export class BlogPostsCardComponent implements OnInit {
	blogPosts: BlogPost[] = [];

	constructor(private blogPostService: BlogPostService) {}

    ngOnInit(): void {
        this.blogPosts = this.blogPostService.getAllPosts();
    }
}
