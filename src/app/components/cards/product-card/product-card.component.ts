import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('flipToBack', [
			state('start', style({
				width: '100%',
				height: '100%'
			})),
			state('end', style({
					width: '100%',
					height: '100%'
				})
			), transition('start => end', animate(500))
		])
	]
})
export class ProductCardComponent {
	@Input() imgUrl: string = '';
	@Input() brand: string = '';
	@Input() productName: string = '';
	@Input() productType: string = '';
	@Input() cost: string = '';

	//isClicked = new BehaviorSubject(false);
	isClickedWithout = false;

	onClick() {
		//this.isClicked.next(!this.isClicked.value);
		this.isClickedWithout = !this.isClickedWithout;

		console.log(this.isClickedWithout);

	}

}
