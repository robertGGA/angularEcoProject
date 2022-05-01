import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CdkDialogContainer, Dialog, DialogRef } from '@angular/cdk-experimental/dialog';
import { Portal } from '@angular/cdk/portal';

@Component({
  selector: 'app-modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalContainerComponent extends CdkDialogContainer {
	portal?: Portal<any>;
	dialogTitle: any  = this._config.data.title
}
