import { Component, OnInit, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, HeaderComponent, FooterComponent],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
    title = "Flytales Blog";

    ngOnInit(): void {        
        
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const element = document.querySelector("html");
        if (prefersDark) {
            element?.classList.add("dark");
        }    
        
        
    }
    
}
