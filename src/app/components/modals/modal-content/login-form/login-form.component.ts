import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Output,
	EventEmitter,
	Optional,
	Inject,
	ChangeDetectorRef
} from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { DIALOG_DATA, DialogRef } from '@angular/cdk-experimental/dialog';
import { DialogService } from '@services/dialog.service';
import { AuthService } from '@services/auth.service';

import { ActivatedRoute, Router } from '@angular/router';
import { DialogCloseDirective } from '@directives/dialog-close.directive';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

	formGroup: FormGroup;
	loginDialogRef: DialogRef<any>

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder,
		private authService: AuthService,
		private route: Router,
		private dialogRef: DialogRef<LoginFormComponent>,
		private readonly cdRef: ChangeDetectorRef
	) {
		this.formGroup = this.formBuilder.group({
			phone: ['', [
				Validators.required,
				Validators.maxLength(11)]],
			password: ['', [Validators.required,
				Validators.maxLength(16)]]
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
		return () => {
			this.authService.authorize({login, password}).subscribe(res => {
				console.log(res.token)
				this.authService.token = res.token;
				this.dialogRef.close();
				this.route.navigate(['/profile']);
			}, err => {
				console.log(err);
			})
		}
	}

}
