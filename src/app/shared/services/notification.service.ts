import { Injectable } from "@angular/core";
import { MessageService } from "primeng/api";


@Injectable({
	providedIn: "root", // Singleton service    
})
export class NotificationService {
	constructor(private messageService: MessageService) {}
	defaulNotificationTime = 3000;

	showSuccess(
		summary: string,
		detail: string = "",
		key: string = "global",
		life: number = this.defaulNotificationTime
	): void {
		this.messageService.add({
			severity: "success",
			summary,
			detail,
			key,
			life,
		});
	}

	showError(
		summary: string,
		detail: string = "",
		key: string = "global",
		life: number = this.defaulNotificationTime
	): void {
		this.messageService.add({
			severity: "error",
			summary,
			detail,
			key,
			life,
		});
	}

	showInfo(
		summary: string,
		detail: string = "",
		key: string = "global",
		life: number = this.defaulNotificationTime
	): void {
		this.messageService.add({
			severity: "info",
			summary,
			detail,
			key,
			life,
		});
	}

	showWarning(
		summary: string,
		detail: string = "",
		key: string = "global",
		life: number = this.defaulNotificationTime
	): void {
		this.messageService.add({
			severity: "warn",
			summary,
			detail,
			key,
			life,
		});
	}   
}
