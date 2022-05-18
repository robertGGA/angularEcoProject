import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-user-card',
	templateUrl: './user-card.component.html',
	styleUrls: ['./user-card.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCardComponent{

	@Input() user: {
		email: string,
		phone_number: string,
		firstname: string,
		lastname: string
	};

	constructor() {
		this.user = {
			email: '',
			phone_number: '',
			firstname: '',
			lastname: ''
		}
	}
}
