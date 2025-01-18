import { Component } from '@angular/core';
import { Divider } from 'primeng/divider';
import { FormsModule } from '@angular/forms';
import { Editor } from 'primeng/editor';

@Component({
    selector: 'app-new-post-page',
    imports: [Divider, FormsModule, Editor, ],
  templateUrl: './new-post-page.component.html',
  styleUrl: './new-post-page.component.css'
})
export class NewPostPageComponent {
    text: string | undefined;
}
