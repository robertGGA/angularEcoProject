import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CdkDialogContainer } from '@angular/cdk-experimental/dialog';
import { Portal } from '@angular/cdk/portal';

@Component({
  selector: 'app-filter-modal-container',
  templateUrl: './filter-modal-container.component.html',
  styleUrls: ['./filter-modal-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterModalContainerComponent  extends CdkDialogContainer  {
	portal?: Portal<any>;
}
