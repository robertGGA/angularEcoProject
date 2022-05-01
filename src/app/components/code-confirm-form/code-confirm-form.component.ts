import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService } from '@services/dialog.service';
import { PartnersLoginFromComponent } from '@components/partners-login-from/partners-login-from.component';

@Component({
  selector: 'app-code-confirm-form',
  templateUrl: './code-confirm-form.component.html',
  styleUrls: ['./code-confirm-form.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeConfirmFormComponent {

	isSubmitted: boolean = false;
	formGroup: FormGroup;
	@Output() closeModal: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		public dialog: DialogService,
		private formBuilder: FormBuilder
	) {
		this.formGroup = this.formBuilder.group({
			code: ['', [
				Validators.required,
				Validators.maxLength(11)]]

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

	onSubmit(phone: string, password: string){
		return ()=>{
			console.log(phone,password)
		}
	}

}
