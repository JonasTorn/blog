import { Component } from "@angular/core";
import { Divider } from "primeng/divider";
import { Card } from "primeng/card";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-contact-page",
	imports: [Divider, Card],
	templateUrl: "./contact-page.component.html",
	styleUrl: "./contact-page.component.css",
})
export class ContactPageComponent {
	contactForm: FormGroup;
	constructor(private fb: FormBuilder) {
		this.contactForm = this.fb.group({
			email: ["", [Validators.required]],
			subject: ["", [Validators.required]],
			content: ["", [Validators.required]],
		});
	}
}
