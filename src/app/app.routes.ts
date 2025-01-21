import { Routes } from "@angular/router";

import { AboutPageComponent } from "./components/views/about-page/about-page.component";
import { ContactPageComponent } from "./components/views/contact-page/contact-page.component";
import { BlogPostComponent } from "./components/views/blog-post/blog-post.component";
import { NewPostPageComponent } from "./components/views/new-post-page/new-post-page.component";
import { HomePageComponent } from "./components/views/home-page/home-page.component";
import { adminGuard } from "./core/guards/admin-guard.guard";

export const routes: Routes = [
	{ path: "", component: HomePageComponent },
	{ path: "post/:id", component: BlogPostComponent },
	{ path: "about", component: AboutPageComponent },
	{ path: "contact", component: ContactPageComponent },
    { 
        path: 'new-post', 
        component: NewPostPageComponent,
        canActivate: [adminGuard], 
      },
];
