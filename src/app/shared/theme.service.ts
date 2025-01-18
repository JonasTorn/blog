import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
    isDarkMode = signal(false);

    constructor() {
        // Detect and set initial dark mode based on system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        this.isDarkMode.set(prefersDark);
        console.log("dark mode: ", prefersDark);
        this.updateTheme();
    }

    toggleDarkMode(): void {
        this.isDarkMode.set(!this.isDarkMode());
        this.updateTheme();
    }

    private updateTheme(): void {
        const element = document.querySelector("html");
        if (this.isDarkMode()) {
            element?.classList.add("p-dark");
        } else {
            element?.classList.remove("p-dark");
        }
    }
}
