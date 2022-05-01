import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/overlay';
import { Dialog, DialogConfig, DialogRef } from '@angular/cdk-experimental/dialog';
import { ModalContainerComponent } from '@components/modal-container/modal-container.component';
import { PartnersLoginFromComponent } from '@components/partners-login-from/partners-login-from.component';
import { RegFormComponent } from '@components/reg-form/reg-form.component';
import { CodeConfirmFormComponent } from '@components/code-confirm-form/code-confirm-form.component';
import { LoginFormComponent } from '@components/login-form/login-form.component';
import { LoginEmailFormComponent } from '@components/login-email-form/login-email-form.component';

interface DialogData{
	title: string,
}

@Injectable({
  providedIn: 'root'
})

export class DialogService {
	constructor(private dialog: Dialog) {}

	openDialog<T>(component: ComponentType<T>,data: DialogData,config: DialogConfig = {}): DialogRef<ModalContainerComponent> {
		this.dialog.closeAll();
		return this.dialog.openFromComponent(component, {
			maxWidth: 'none',
			data: data,
			...config,
			containerComponent: ModalContainerComponent,
		});
	}
	openPartnersLoginDialog(){
		this.openDialog(PartnersLoginFromComponent,{title: "Вход"});
	}
	openRegDialog(){
		this.openDialog(RegFormComponent,{title: "Вход или регистрация"});
	}
	openCodeConfirmDialog() {
		this.openDialog(CodeConfirmFormComponent,{title: "Ввести код"});
	}
	openLoginDialog(){
		this.openDialog(LoginFormComponent,{title: "Вход"});
	}
	openLoginEmailDialog(){
		this.openDialog(LoginEmailFormComponent,{title: "Вход"});
	}
}
