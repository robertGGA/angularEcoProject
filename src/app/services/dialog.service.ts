import { Injectable } from '@angular/core';
import { ComponentType, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk-experimental/dialog';
import { ModalContainerComponent } from '@components/modal-container/modal-container.component';
import { PartnersLoginFromComponent } from '@components/partners-login-from/partners-login-from.component';
import { RegFormComponent } from '@components/reg-form/reg-form.component';
import { CodeConfirmFormComponent } from '@components/code-confirm-form/code-confirm-form.component';
import { LoginFormComponent } from '@components/login-form/login-form.component';
import { LoginEmailFormComponent } from '@components/login-email-form/login-email-form.component';
import { FilterModalContainerComponent } from '@components/filter-modal-container/filter-modal-container.component';

interface DialogData {
	title: string,
}

@Injectable({
	providedIn: 'root'
})

export class DialogService {
	constructor(private dialog: Dialog) {
	}

	openAuthDialog<T>(component: ComponentType<T>, data: DialogData, config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
		this.dialog.closeAll();
		return this.dialog.openFromComponent(component, {
			maxWidth: 'none',
			data: data,
			...config,
			containerComponent: ModalContainerComponent,
		});
	}
	openFilterDialog<T>(component: ComponentType<T>, data?: DialogData, config: DialogConfig = {}): DialogRef<FilterModalContainerComponent> {
		config = {
			panelClass: "fullWidthDialog"
		}
		this.dialog.closeAll();
		return this.dialog.openFromComponent(component, {
			maxWidth: 'none',
			data: data,
			...config,
			containerComponent: FilterModalContainerComponent,
		});
	}

	openPartnersLoginDialog() {
		this.openAuthDialog(PartnersLoginFromComponent, { title: 'Вход' });
	}

	openRegDialog() {
		this.openAuthDialog(RegFormComponent, { title: 'Вход или регистрация' });
	}

	openCodeConfirmDialog() {
		this.openAuthDialog(CodeConfirmFormComponent, { title: 'Ввести код' });
	}

	openLoginDialog() {
		this.openAuthDialog(LoginFormComponent, { title: 'Вход' });
	}

	openLoginEmailDialog() {
		this.openAuthDialog(LoginEmailFormComponent, { title: 'Вход' });
	}
}
