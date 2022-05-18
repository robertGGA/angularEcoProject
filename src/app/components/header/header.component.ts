import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges, OnInit, Inject } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { LoginFormComponent } from '@components/login-form/login-form.component';
import { AuthService } from '@services/auth.service';
import { Observable, observable, of } from 'rxjs';

@Component({
	selector: 'Header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent{

	@Input() isAuth$ = of(!this.auth.isAuthorized);

	constructor(private dialog: DialogService, @Inject(AuthService) private auth: AuthService) {}

	openLoginDialog() {
		this.dialog.openAuthDialog(LoginFormComponent, { title: 'Вход' })
	}

}
