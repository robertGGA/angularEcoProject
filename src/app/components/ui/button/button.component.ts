import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

	@Input() isLarge: boolean
	@Input() isPrimary: boolean
	@Output() submitFunc = new EventEmitter();
	@Input() value: string

	constructor() {
		this.isLarge = false;
		this.isPrimary = false;
		this.value = 'default';
	}


}
