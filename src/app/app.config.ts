import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter, withInMemoryScrolling, withRouterConfig } from "@angular/router";
import { routes } from "./app.routes";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";
import Aura from "@primeng/themes/aura";
import Nora from "@primeng/themes/nora";
import { MyPreset, Noir } from "../assets/MyPreset";
import { MyPresetBig } from "../assets/mythemebig";
import { definePreset } from "@primeng/themes";
import { MessageService } from "primeng/api";

export const appConfig: ApplicationConfig = {
	providers: [
        MessageService,
        provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes, 
            withInMemoryScrolling({
            scrollPositionRestoration: "enabled", 
            anchorScrolling: 'enabled',           
        })
    ),
		provideAnimationsAsync(),
		providePrimeNG({
            ripple: true,
			theme: {
				preset: MyPreset,
				options: {
					prefix: "p",
					darkModeSelector: ".p-dark",
					cssLayer: {
						name: "primeng",
						order: "tailwind-base, primeng, tailwind-utilities",
					},
				},
			},
		}),
	],
  
};
