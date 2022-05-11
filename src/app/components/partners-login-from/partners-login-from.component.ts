import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { RegFormComponent } from '@components/reg-form/reg-form.component';
import { CodeConfirmFormComponent } from '@components/code-confirm-form/code-confirm-form.component';
import { LoginFormComponent } from '@components/login-form/login-form.component';
import { LoginEmailFormComponent } from '@components/login-email-form/login-email-form.component';

@Component({
	selector: 'app-partners-login-from',
	templateUrl: './partners-login-from.component.html',
	styleUrls: ['./partners-login-from.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartnersLoginFromComponent {
	formGroup: FormGroup;
	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder
	) {
		this.formGroup = this.formBuilder.group({
			name: ['', Validators.required,
				Validators.maxLength(64)],
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
