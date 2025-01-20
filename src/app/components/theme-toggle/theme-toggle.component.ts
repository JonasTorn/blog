import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ToggleSwitch } from "primeng/toggleswitch";
import { ThemeService } from "../../shared/services/theme.service";

@Component({
	selector: "app-theme-toggle",
	imports: [ToggleSwitch, FormsModule],
	templateUrl: "./theme-toggle.component.html",
	styleUrl: "./theme-toggle.component.css",
})
export class ThemeToggleComponent {
	constructor(public themeService: ThemeService) {}
}
