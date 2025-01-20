import { Component } from "@angular/core";
import { ToggleSwitch } from "primeng/toggleswitch";
import { FormsModule } from "@angular/forms";
import { AdminService } from "../../core/services/admin.service";

@Component({
	selector: "app-admin-toggle",
	imports: [ToggleSwitch, FormsModule],
	templateUrl: "./admin-toggle.component.html",
	styleUrl: "./admin-toggle.component.css",
})
export class AdminToggleComponent {
	constructor(public adminService: AdminService) {}
	onToggleChange(event: any) {
		console.log("Admin mode changed:", event.checked);
	}
}
