import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { AdminToggleComponent } from "../admin-toggle/admin-toggle.component";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";
import { Divider } from "primeng/divider";
import { AdminService } from "../../core/services/admin.service";
import { Button } from "primeng/button";

@Component({
	selector: "app-header",
	imports: [RouterLink, AdminToggleComponent, ThemeToggleComponent, Divider, Button],
	templateUrl: "./header.component.html",
	styleUrl: "./header.component.css",
})
export class HeaderComponent {
	constructor(public adminService: AdminService) {}
}
