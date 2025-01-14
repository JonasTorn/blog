import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AdminService } from "../../shared/admin.service";
import { ButtonModule } from 'primeng/button';

@Component({
	selector: "app-home-page",
	imports: [RouterLink, ButtonModule],
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
