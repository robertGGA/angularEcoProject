import {
	Component,
	ChangeDetectionStrategy,
	Input,
	OnChanges,
	SimpleChanges,
	OnInit,
	Inject,
	ChangeDetectorRef
} from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { LoginFormComponent } from '@components/modals/modal-content/login-form/login-form.component';
import { AuthService } from '@services/auth.service';
import { Observable, observable, of } from 'rxjs';
import { MobileModalComponent } from '@components/modals/modal-containers/mobile-modal/mobile-modal.component';
import { ModalMenuContentComponent } from '@components/modals/modal-content/modal-menu-content/modal-menu-content.component';


@Component({
	selector: 'Header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

	@Input() auth$ = of(!this.auth.isAuthorized);
	isAuth: boolean = false;

	constructor(public dialog: DialogService, public auth: AuthService, private readonly cdRef: ChangeDetectorRef) {

	}

	openLoginDialog() {
		this.dialog.openAuthDialog(LoginFormComponent, { title: 'Вход' })
	}

	openBurgerMenu() {
		this.dialog.openMobileModal(ModalMenuContentComponent, { title: '' })
	}

	ngOnInit(): void {
	}
}
