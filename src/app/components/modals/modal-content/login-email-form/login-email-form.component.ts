import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { RegFormComponent } from '@components/modals/modal-content/reg-form/reg-form.component';
import { CodeConfirmFormComponent } from '@components/code-confirm-form/code-confirm-form.component';
import { PartnersLoginFromComponent } from '@components/modals/modal-containers/partners-login-from/partners-login-from.component';

@Component({
	selector: 'app-login-email-form',
	templateUrl: './login-email-form.component.html',
	styleUrls: ['./login-email-form.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginEmailFormComponent {
	formGroup: FormGroup;
	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder
	) {
		this.formGroup = this.formBuilder.group({
			email: ['', [
				Validators.required,
				Validators.maxLength(64),
				Validators.email]],
			password: ['', [Validators.required,
				Validators.maxLength(16)]]
		})
	}

	validateControl(name: string, validateField: string) {
		let control = this.formGroup.get(name);
		return (control?.touched || control?.dirty) && control?.hasError(validateField);
	}

	isControlValid(name: string) {
		let control = this.formGroup.get(name);
		return (control?.touched || control?.dirty) && control?.errors;
	}

	getControl(name: string) {
		return this.formGroup.get(name)!;
	}

	onSubmit(phone: string, password: string) {
		return () => {
			console.log(phone, password)
		}
	}
}
