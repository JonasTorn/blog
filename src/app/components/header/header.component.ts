import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminToggleComponent } from "../admin-toggle/admin-toggle.component";

@Component({
    selector: 'app-header',
    imports: [RouterLink, AdminToggleComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
})
export class HeaderComponent { }
