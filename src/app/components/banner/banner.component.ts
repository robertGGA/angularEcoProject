import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class BannerComponent implements OnInit {

	@Input() title: string;
	@Input() btnText: string;
	@Input() bgImg: string;
	@Input() bgColor: string;
	@Input() text: string;

	constructor() {
		this.title ="";
		this.btnText ="";
		this.bgColor ="";
		this.bgImg ="";
		this.text ="";
	}

	ngOnInit(): void {
	}

}
