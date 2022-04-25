import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'main-page',
	templateUrl: './main-page.component.html',
	styleUrls: ['./main-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit {

	isModalOpen: boolean = false;

	constructor() {
	}

	ngOnInit(): void {
	}

	openModal() {
		this.isModalOpen = true;
	}

	closeModal() {
		this.isModalOpen = false;
	}

}
