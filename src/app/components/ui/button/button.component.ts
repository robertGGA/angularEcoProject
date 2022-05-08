import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

	@Input() isLarge: boolean
	@Input() isPrimary: boolean
	@Input() submitFunc: any
	@Input() value: string

	constructor() {
		this.isLarge = false;
		this.isPrimary = false;
		this.value = 'default';
	}


}
