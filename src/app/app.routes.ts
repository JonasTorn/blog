import { Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { AboutPageComponent } from "./components/about-page/about-page.component";
import { ContactPageComponent } from "./components/contact-page/contact-page.component";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";

export const routes: Routes = [
	{ path: "", component: HomePageComponent },
	{ path: "post", component: BlogPostComponent },
	{ path: "about", component: AboutPageComponent },
	{ path: "contact", component: ContactPageComponent },
];
