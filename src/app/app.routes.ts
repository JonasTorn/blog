import { Routes } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { AboutPageComponent } from "./components/about-page/about-page.component";
import { ContactPageComponent } from "./components/contact-page/contact-page.component";
import { BlogPostComponent } from "./components/blog-post/blog-post.component";
import { NewPostPageComponent } from "./components/new-post-page/new-post-page.component";

export const routes: Routes = [
	{ path: "", component: HomePageComponent },
	{ path: "post/:id", component: BlogPostComponent },
	{ path: "about", component: AboutPageComponent },
	{ path: "contact", component: ContactPageComponent },
    { path: "new-post", component: NewPostPageComponent },
];
