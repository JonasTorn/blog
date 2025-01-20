import { Component, OnInit } from "@angular/core";

import { ButtonModule } from "primeng/button";

import { Divider } from "primeng/divider";
import { BlogPostsCardComponent } from "../../blog-posts-card/blog-posts-card.component";
import { AdminService } from "../../../core/services/admin.service";

@Component({
	selector: "app-home-page",
	imports: [ButtonModule, BlogPostsCardComponent, Divider],
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
