import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminToggleComponent } from "../admin-toggle/admin-toggle.component";
import { ThemeToggleComponent } from "../theme-toggle/theme-toggle.component";

@Component({
    selector: 'app-header',
    imports: [RouterLink, AdminToggleComponent, ThemeToggleComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent { }
