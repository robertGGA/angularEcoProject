import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger("cardFlip", [
			state(
				"default",
				style({
					transform: "none"
				})
			),
			state(
				"flipped",
				style({
					transform: "rotateY(180deg)"
				})
			),
			state(
				"matched",
				style({
					visibility: "false",
					transform: "scale(0.05)",
					opacity: 0
				})
			),
			transition("default => flipped", [animate("400ms")]),
			transition("flipped => default", [animate("400ms")]),
			transition("* => matched", [animate("400ms")])
		])
	]
})
export class ProductCardComponent {
	@Input() imgUrl: string = '';
	@Input() brand: string = '';
	@Input() productName: string = '';
	@Input() productType: string = '';
	@Input() cost: string = '';

	isClickedWithout = false;
	state = 'default';

	onClick() {
		if (this.state === 'default') {
			this.state = 'flipped';
		} else {
			this.state = 'default';
		}
		this.isClickedWithout = !this.isClickedWithout;
	}


}
