import { Component } from "@angular/core";
import { ToggleSwitch } from "primeng/toggleswitch";
import { FormsModule } from "@angular/forms";
@Component({
	selector: "app-admin-toggle",
	imports: [ToggleSwitch, FormsModule],
	templateUrl: "./admin-toggle.component.html",
	styleUrl: "./admin-toggle.component.css",
})
export class AdminToggleComponent {
	isAdmin: boolean = false;
    toggleAdminMode() {
        
    }
}
