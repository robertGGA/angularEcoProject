import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CodeConfirmFormComponent } from '@components/code-confirm-form/code-confirm-form.component';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { LoginFormComponent } from '@components/modals/modal-content/login-form/login-form.component';
import { PartnersLoginFromComponent } from '@components/modals/modal-containers/partners-login-from/partners-login-from.component';
import { AuthService } from '@services/auth.service';

@Component({
	selector: 'app-reg-form',
	templateUrl: './reg-form.component.html',
	styleUrls: ['./reg-form.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegFormComponent {

	formGroup: FormGroup;
	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder,
		private authService: AuthService,
	) {
		this.formGroup = this.formBuilder.group({
			phone_number: ['', [
				Validators.required,
				Validators.maxLength(11)
			]],
			password: ['', [
				Validators.required
			]],
			email: ['', [
				Validators.required,
				Validators.email
			]],
			role: 'USER'
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

	onSubmit() {
		this.authService.registration(this.formGroup.value).subscribe(res => {
			this.dialog.openLoginDialog();
		}, err => {
			console.log(err);
		})
	}

}
