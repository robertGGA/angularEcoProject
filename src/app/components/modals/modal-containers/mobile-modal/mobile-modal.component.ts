import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CdkDialogContainer } from '@angular/cdk-experimental/dialog';
import { Portal } from '@angular/cdk/portal';
import { DialogService } from '@services/dialog.service';

@Component({
  selector: 'app-mobile-modal',
  templateUrl: './mobile-modal.component.html',
  styleUrls: ['./mobile-modal.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileModalComponent extends CdkDialogContainer {
	portal?: Portal<any>;
	dialogTitle: any  = this._config.data.title
}
