import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DialogService } from '@services/dialog.service';
import { FilterComponent } from '@components/filter/filter.component';

@Component({
	selector: 'app-market-page',
	templateUrl: './market-page.component.html',
	styleUrls: ['./market-page.component.sass'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketPageComponent {
	constructor(private dialogService: DialogService) {
	}

	openFiltersDialog() {
		this.dialogService.openFilterDialog(FilterComponent)
	}
}
