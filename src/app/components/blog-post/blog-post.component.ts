import { Component, OnInit, Pipe } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogPost } from './blog-post';
import { BlogPostService } from './blog-post.service';
import { DatePipe } from '@angular/common';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'app-blog-post',
  imports: [DatePipe, ImageModule],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})


export class BlogPostComponent implements OnInit {
    blogPost?: BlogPost;

    constructor(
        private blogPostService: BlogPostService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const postId = Number(this.route.snapshot.paramMap.get("id"));
        this.blogPost = this.blogPostService.getPostById(postId);
    }
   
}   
