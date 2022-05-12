import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Optional, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { DIALOG_DATA, DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { RegFormComponent } from '@components/reg-form/reg-form.component';
import { CodeConfirmFormComponent } from '@components/code-confirm-form/code-confirm-form.component';
import { AuthService } from '@services/auth.service';
import { group } from '@angular/animations';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

	formGroup: FormGroup;

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder,
		private authService: AuthService,
	) {
		this.formGroup = this.formBuilder.group({
			phone: ['', [
				Validators.required,
				Validators.maxLength(11)]],
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

	onSubmit() {
		const login = this.formGroup.value.phone;
		const password = this.formGroup.value.password;
		return () => {
			this.authService.authorize({login, password}).subscribe(res => {
				this.authService.token = res.token;
			}, err => {
				console.log(err);
			})
		}
	}

}
