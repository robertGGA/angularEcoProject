import {
	Component,
	ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { AuthService } from '@services/auth.service';

import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

	formGroup: FormGroup;
	loginDialogRef: DialogRef<any>
	submitError = new BehaviorSubject(false);
	errorMessage = '';

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private route: Router,
		private dialogRef: DialogRef<LoginFormComponent>,
	) {
		this.formGroup = this.formBuilder.group({
			phone: ['', [
				Validators.required,
				Validators.maxLength(11)]],
			password: ['', [Validators.required,
				Validators.maxLength(16)]]
		})
		this.formGroup.get('phone')?.valueChanges.subscribe(() => {
			this.submitError.next(false);
		})
		this.formGroup.get('password')?.valueChanges.subscribe(() => {
			this.submitError.next(false);
		})
		this.loginDialogRef = dialogRef;
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
		this.authService.authorize({ login, password }).subscribe(res => {
			this.authService.token = res.token;
			this.dialogRef.close();
			this.route.navigate(['/profile']);
		}, err => {
			this.errorMessage = err.error.message
			this.submitError.next(true);
		})
	}

}
