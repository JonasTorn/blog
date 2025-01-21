import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class AdminService {
	private isAdminSubject = new BehaviorSubject<boolean>(false);

	constructor() {
		const storedValue = localStorage.getItem("isAdmin");
		const initialAdminValue = storedValue === "true";
		this.isAdminSubject = new BehaviorSubject<boolean>(initialAdminValue);
	}

	isAdmin$ = this.isAdminSubject.asObservable();
	get isAdmin(): boolean {
		return this.isAdminSubject.value;
	}
	set isAdmin(value: boolean) {
		this.isAdminSubject.next(value);
        
		localStorage.setItem("isAdmin", String(value));
	}
}
