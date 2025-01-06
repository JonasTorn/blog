import { Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PostsPageComponent } from './components/posts-page/posts-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

export const routes: Routes = [
    { path: '', component: HomePageComponent }, 
    { path: 'posts', component: PostsPageComponent},
    { path: 'about', component: AboutPageComponent}
];
