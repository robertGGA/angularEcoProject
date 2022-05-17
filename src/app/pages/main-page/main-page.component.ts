import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {
	@Input() first_image = './assets/images/market.svg'
	isModalOpen: boolean = false;

	constructor() {
	}

	ngOnInit(): void {
	}

	closeModal() {
		this.isModalOpen = false;
	}

}
