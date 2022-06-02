import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { FilterComponent } from '@components/filter/filter.component';
import { MarketService } from '@services/market.service';
import { BehaviorSubject } from 'rxjs';

@Component({
	selector: 'app-market-page',
	templateUrl: './market-page.component.html',
	styleUrls: ['./market-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketPageComponent implements OnInit {
	isLoading = new BehaviorSubject(true);
	constructor(private dialogService: DialogService, private marketService: MarketService) {
	}

	openFiltersDialog() {
		this.dialogService.openFilterDialog(FilterComponent)
	}

	ngOnInit(): void {
		this.marketService.getItems().subscribe(res => {
			console.log(res);
			this.isLoading.next(false);
		}, () => {
			setTimeout(() => {
				this.isLoading.next(false);
			}, 2000);
		});
	}
}
