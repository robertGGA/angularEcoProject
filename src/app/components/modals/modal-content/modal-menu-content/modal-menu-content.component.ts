import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { LoginFormComponent } from '@components/modals/modal-content/login-form/login-form.component';
import { DialogRef } from '@angular/cdk-experimental/dialog';
import { RegFormComponent } from '@components/modals/modal-content/reg-form/reg-form.component';
import { Router } from '@angular/router';
import { AuthService } from '@services/auth.service';

@Component({
	selector: 'app-mobile-modal-content',
	templateUrl: './modal-menu-content.component.html',
	styleUrls: ['./modal-menu-content.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalMenuContentComponent implements OnInit {

	user: any;
	constructor(public dialogService: DialogService,
				private dialogRef: DialogRef<ModalMenuContentComponent>,
				private route: Router,
				private auth: AuthService) {
	}

	openLoginModal() {
		this.dialogRef.close();
		this.dialogService.openMobileModal(LoginFormComponent, {title: 'Войти'});
	}

	openRegModal() {
		this.dialogRef.close();
		this.dialogService.openMobileModal(RegFormComponent, {title: 'Регистрация'});
	}

	closeModal() {
		this.dialogRef.close();
	}

	ngOnInit(): void {
		this.auth.getProfile().subscribe(res => {
			this.user = res;
			console.log(res);
		});
	}

}
