import { Component, OnInit } from "@angular/core";
import { AdminService } from "../../shared/admin.service";
import { ButtonModule } from 'primeng/button';
import { BlogPostsListComponent } from "../blog-posts-list/blog-posts-list.component";
import { Divider } from "primeng/divider";

@Component({
	selector: "app-home-page",
	imports: [ButtonModule, BlogPostsListComponent, Divider],
	templateUrl: "./home-page.component.html",
	styleUrl: "./home-page.component.css",
})
export class HomePageComponent implements OnInit {
	constructor(public adminService: AdminService) {}
	ngOnInit() {
         // If you need the current admin state as a boolean directly:
		const currentAdminState = this.adminService.isAdmin;
	}
}
