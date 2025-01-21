import { Component } from "@angular/core";
import { Divider } from "primeng/divider";
import { Card } from "primeng/card";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import { FloatLabelModule } from "primeng/floatlabel";
import { InputGroupAddonModule } from "primeng/inputgroupaddon";
import { InputGroupModule } from "primeng/inputgroup";
import { Message } from "primeng/message";
import { InputText } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { Toast } from "primeng/toast";
import { Button } from "primeng/button";
import { Textarea } from "primeng/textarea";
import { NotificationService } from "../../../shared/services/notification.service";

@Component({
	selector: "app-contact-page",
	imports: [
		Divider,
		Card,
		Button,
		FloatLabelModule,
		InputGroupAddonModule,
		InputGroupModule,
		ReactiveFormsModule,
		Message,
		InputText,
		CommonModule,
		Toast,
		Textarea,
	],
	templateUrl: "./contact-page.component.html",
	styleUrl: "./contact-page.component.css",
})
export class ContactPageComponent {
	contactForm: FormGroup;
	constructor(
		private fb: FormBuilder,
		private notificationService: NotificationService
	) {
		this.contactForm = this.fb.group({
			email: ["", [Validators.required, Validators.email]],
			subject: ["", [Validators.required]],
			content: ["", [Validators.required]],
		});
	}
	contactSubmit() {
		if (this.contactForm.invalid) {
			return;
		}
		const email: string = this.contactForm.value.email;
		const subject: string = this.contactForm.value.subject;
		const content: string = this.contactForm.value.content;

		console.log("You got mail!");
		console.log("From:", email);
		console.log("Subject:", subject);
		console.log("Content:", content);
        this.contactForm.reset();
        this.showConfirmationMessage()
	}
    showConfirmationMessage() {
		this.notificationService.showSuccess("A mail has been sent :)", "", "br", 3000);
	}
}
