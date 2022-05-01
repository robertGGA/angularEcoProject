import { Component, OnInit, ChangeDetectionStrategy, Inject, Optional } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { LoginFormComponent } from '@components/login-form/login-form.component';


@Component({
	selector: 'Header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	constructor(private dialog: DialogService) {
	}

	ngOnInit(): void {
	}

	openLoginDialog() {
		this.dialog.openDialog(LoginFormComponent,{title: "Вход"})
	}
}
