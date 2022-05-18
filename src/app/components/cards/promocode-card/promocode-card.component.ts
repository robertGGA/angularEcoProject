import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'app-promocode-card',
	templateUrl: './promocode-card.component.html',
	styleUrls: ['./promocode-card.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PromocodeCardComponent {
	img = './assets/images/promoCodeCard.png';

	constructor() {
	}
}
